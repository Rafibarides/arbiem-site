/* eslint-disable react/no-unknown-property */
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Environment, useGLTF } from '@react-three/drei';
import { MathUtils } from 'three';
import PropTypes from 'prop-types';

function MockupModel({ targetRotationY = 0, isMobile = false }) {
  const groupRef = useRef();
  const gltf = useGLTF('/mockup.glb');

  // Smoothly interpolate to the target rotation each frame
  useFrame(() => {
    if (!groupRef.current) return;
    const currentY = groupRef.current.rotation.y;
    groupRef.current.rotation.y = MathUtils.lerp(currentY, targetRotationY, 0.1);
  });

  return (
    <group ref={groupRef} rotation={[MathUtils.degToRad(-10), MathUtils.degToRad(0), 0]}>
      <Center>
        <primitive
          object={gltf.scene}
          scale={isMobile ? 0.5 : 0.6}
        />
      </Center>
    </group>
  );
}

useGLTF.preload('/mockup.glb');

const Mockup3D = ({ rotation = 0, isMobile = false, style = {} }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: isMobile ? '64vw' : '600px',
        height: isMobile ? '640px' : '760px',
        overflow: 'visible',
        background: 'transparent',
        boxShadow: 'none',
        borderRadius: 0,
        pointerEvents: 'none', // allow page interactions through the canvas
        zIndex: 10,
        ...style,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%', background: 'transparent', overflow: 'visible' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 2, -3]} intensity={0.5} />
        <Suspense fallback={null}>
          <MockupModel targetRotationY={rotation} isMobile={isMobile} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

MockupModel.propTypes = {
  targetRotationY: PropTypes.number,
  isMobile: PropTypes.bool,
};

Mockup3D.propTypes = {
  rotation: PropTypes.number,
  isMobile: PropTypes.bool,
  style: PropTypes.object,
};

export default Mockup3D;



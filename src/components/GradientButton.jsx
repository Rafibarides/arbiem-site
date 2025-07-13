import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import palette from '../utils/Colors.js';

const GradientButton = ({ 
  children, 
  icon, 
  onClick, 
  size = 'medium',
  disabled = false,
  ...props 
}) => {
  // Size configurations
  const sizes = {
    small: {
      padding: '12px 24px',
      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
      iconSize: '1em'
    },
    medium: {
      padding: '16px 32px',
      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
      iconSize: '1.2em'
    },
    large: {
      padding: '20px 40px',
      fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)',
      iconSize: '1.4em'
    }
  };

  const currentSize = sizes[size];

  return (
    <button
      style={{
        background: `linear-gradient(to right, ${palette.purple}, ${palette.purpleAccent})`,
        color: palette.text,
        border: 'none',
        padding: currentSize.padding,
        fontSize: currentSize.fontSize,
        fontFamily: '"M PLUS Rounded 1c", sans-serif',
        fontWeight: 'bold',
        borderRadius: '50px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        margin: '0 auto',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        opacity: disabled ? 0.6 : 1,
        boxShadow: `
          0 4px 14px ${palette.purpleAccent}66,
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = `
            0 6px 20px ${palette.purpleAccent}80,
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
          `;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = `
            0 4px 14px ${palette.purpleAccent}66,
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `;
        }
      }}
      onMouseDown={(e) => {
        if (!disabled) {
          e.target.style.transform = 'scale(0.95)';
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          e.target.style.transform = 'scale(1.05)';
        }
      }}
      onClick={!disabled ? onClick : undefined}
      {...props}
    >
      {/* Background overlay for hover effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(to right, ${palette.purple}20, ${palette.purpleAccent}20)`,
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.target.style.opacity = '1';
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled) {
            e.target.style.opacity = '0';
          }
        }}
      />
      
      {/* Content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        {icon && (
          <FontAwesomeIcon 
            icon={icon} 
            style={{ fontSize: currentSize.iconSize }} 
          />
        )}
        {children}
      </div>
    </button>
  );
};

export default GradientButton;
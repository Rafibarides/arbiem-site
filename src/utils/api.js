// API utility functions
const API_BASE_URL = 'https://pub-a2d61889013a43e69563a1bbccaed58c.r2.dev';

// Get the correct API URL based on environment
export const getApiUrl = (endpoint) => {
  // In development, use proxy
  if (import.meta.env.DEV) {
    return `/api${endpoint}`;
  }
  // In production, use direct URL
  return `${API_BASE_URL}${endpoint}`;
};

// Fetch artists data
export const fetchArtists = async () => {
  try {
    const response = await fetch(getApiUrl('/jsonMaster/artists.json'));
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
}; 
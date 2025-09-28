
export const config = {
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  BASE_URL: process.env.REACT_APP_BASE_URL || 'http://localhost:3000',
  ENV: process.env.REACT_APP_ENV || 'development',
  
  ENDPOINTS: {
    AUTH: process.env.REACT_APP_AUTH_ENDPOINT || '/auth',
    PRODUCTS: process.env.REACT_APP_PRODUCT_ENDPOINT || '/products',
    USERS: process.env.REACT_APP_USER_ENDPOINT || '/users',
    ORDERS: process.env.REACT_APP_ORDER_ENDPOINT || '/orders',
  },
  
  STRIPE_PUBLIC_KEY: process.env.REACT_APP_STRIPE_PUBLIC_KEY,
  GOOGLE_MAPS_API_KEY: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  
  ENABLE_ANALYTICS: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  ENABLE_DEBUG: process.env.REACT_APP_ENABLE_DEBUG === 'true',
};

export const isDevelopment = () => config.ENV === 'development';
export const isProduction = () => config.ENV === 'production';

export const getApiUrl = (endpoint) => `${config.API_URL}${endpoint}`;
export const getFullUrl = (path) => `${config.BASE_URL}${path}`;
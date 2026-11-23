export const API_ENDPOINTS = {
  HEALTH: '/health',
  ROOT: '/',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    STATUS: '/auth/status',
  },
  BUSINESSES: {
    LIST: '/businesses/',
    DETAIL: (id) => `/businesses/${id}`,
  },
  BOXES: {
    LIST: '/boxes/',
    DETAIL: (id) => `/boxes/${id}`,
  },
};

export const APP_CONFIG = {
  APP_NAME: 'DadBox',
  TAGLINE: 'Save Food, Save Money, Save the Planet',
  VERSION: '1.0.0',
};

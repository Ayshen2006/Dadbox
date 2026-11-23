/**
 * Centralized API service for DadBox frontend.
 * Interacts with Flask REST API via relative proxy or configured base URL.
 */
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  try {
    const response = await fetch(url, { ...options, headers });
    const json = await response.json().catch(() => null);

    if (!response.ok) {
      const errorMsg = json?.message || `HTTP ${response.status}: ${response.statusText}`;
      throw new Error(errorMsg);
    }

    return json;
  } catch (error) {
    console.error(`[API Error] ${endpoint}:`, error);
    throw error;
  }
}

export async function checkBackendHealth() {
  return request('/health');
}

export async function getBusinesses() {
  return request('/businesses/');
}

export async function getBoxes() {
  return request('/boxes/');
}

export default {
  request,
  checkBackendHealth,
  getBusinesses,
  getBoxes,
};

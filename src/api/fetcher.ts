
import { ApiResponse } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com';

async function fetcher<T>(
  endpoint: string,
  options?: RequestInit & { token?: string }
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options?.headers,
    };

    // Add authorization header if token exists
    if (options?.token) {
      headers['Authorization'] = `Bearer ${options.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'same-origin'
    });

    if (response.status === 401) {
      return {
        data: null as T,
        error: 'Authentication required',
        status: 401,
      };
    }

    if (!response.ok) {
      const errorData = await response.text();
      return {
        data: null as T,
        error: errorData || 'Request failed',
        status: response.status,
      };
    }

    const data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    console.error('API Error:', error);
    return {
      data: null as T,
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 500,
    };
  }
}

export const api = {
  get: <T>(endpoint: string, token?: string) => 
    fetcher<T>(endpoint, { token }),
  
  post: <T>(endpoint: string, body: object, token?: string) =>
    fetcher<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      token
    }),

  put: <T>(endpoint: string, body: object, token?: string) =>
    fetcher<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
      token
    }),

  delete: <T>(endpoint: string, token?: string) =>
    fetcher<T>(endpoint, {
      method: 'DELETE',
      token
    })
};

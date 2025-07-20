import axios from "axios";
import api from "../axios";

// 1. Define types
interface ApiError extends Error {
  statusCode?: number;
}

interface TestData {
  id: string;
  // Add other properties as needed
}

interface TestDataService {
  getAll: () => Promise<TestData[]>;
  getById: (id: string) => Promise<TestData>;
  create: (testData: Omit<TestData, 'id'>) => Promise<TestData>;
  update: (id: string, testData: Partial<TestData>) => Promise<TestData>;
  delete: (id: string) => Promise<void>;
}

// 2. Enhanced error handler
function handleApiError(error: unknown, fallbackMessage: string): ApiError {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const errorMessage = error.response?.data?.message || fallbackMessage;
    
    const customError: ApiError = new Error(errorMessage);
    customError.statusCode = status;
    return customError;
  }

  if (error instanceof Error) {
    return error;
  }

  return new Error(fallbackMessage);
}

// 3. Implement typed service
const testDataService: TestDataService = {
  getAll: async () => {
    try {
      const response = await api.get<TestData[]>("/test-data");
      return response.data;
    } catch (error) {
      throw handleApiError(error, "Failed to fetch test-data");
    }
  },

  getById: async (id: string) => {
    try {
      const response = await api.get<TestData>(`/test-data/${id}`);
      return response.data;
    } catch (error) {
      throw handleApiError(error, `Failed to fetch test-data with ID: ${id}`);
    }
  },

  create: async (testData: Omit<TestData, 'id'>) => {
    try {
      const response = await api.post<TestData>("/test-data", testData);
      return response.data;
    } catch (error) {
      throw handleApiError(error, "Failed to create test-data");
    }
  },

  update: async (id: string, testData: Partial<TestData>) => {
    try {
      const response = await api.put<TestData>(`/test-data/${id}`, testData);
      return response.data;
    } catch (error) {
      throw handleApiError(error, `Failed to update test-data with ID: ${id}`);
    }
  },

  delete: async (id: string) => {
    try {
      await api.delete<void>(`/test-data/${id}`);
    } catch (error) {
      throw handleApiError(error, `Failed to delete test-data with ID: ${id}`);
    }
  },
};

export default testDataService;
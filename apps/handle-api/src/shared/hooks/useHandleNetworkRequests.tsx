import axios, { AxiosError, AxiosResponse } from 'axios';
import { CustomError, RequestType } from '../types/requestType';
import { useState } from 'react';

const BASE_URL = 'http://localhost:3001/api/1';

export const useHandleNetworkRequests = () => {
  const [error, setError] = useState<CustomError | null>(null);

  async function getData<T>(type: RequestType): Promise<{ data: T[] }> {
    try {
      const response: AxiosResponse<{ data: T[] }> = await axios.get(
        `${BASE_URL}/${type}`
      );
      setError(null);
      return response.data;
    } catch (error) {
      setError(error as CustomError);
      throw error as AxiosError<CustomError>;
    }
  }

  async function postData<T>(type: RequestType, data: T): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post<T>(
        `${BASE_URL}/${type}`,
        data
      );
      setError(null);
      return response.data;
    } catch (error) {
      setError(error as CustomError);
      throw error as AxiosError<CustomError>;
    }
  }

  async function getByID<T>(type: RequestType, id: T): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get<T>(
        `${BASE_URL}/${type}/${id}`
      );
      setError(null);
      return response.data;
    } catch (error) {
      setError(error as CustomError);
      throw error as AxiosError<CustomError>;
    }
  }

  async function deleteItem<T>(type: RequestType, id: T): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.delete<T>(
        `${BASE_URL}/${type}/${id}`
      );
      setError(null);
      return response.data;
    } catch (error) {
      setError(error as CustomError);
      throw error as AxiosError<CustomError>;
    }
  }
  return { getData, postData, getByID, deleteItem, error };
};

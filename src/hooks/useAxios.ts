/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';
import useSWR from 'swr';

interface UseAxiosObject {
  url: string;
  params?: AxiosRequestConfig;
  formatResponse?: (response: any) => any;
  initialData?: any;
}

interface UseAxiosResponse {
  data: any;
  error: any;
  dependencies: any[];
  isLoading: boolean;
}

export const useAxios = <Data = any, Error = any>(
  { url, params, formatResponse, initialData }: UseAxiosObject,
  dependencies: any[]
): UseAxiosResponse => {
  const { data, error } = useSWR<Data, Error>(url, async (thisUrl) => {
    const response = params
      ? await axios.get(thisUrl, { params: { limit: 5 } })
      : await axios.get(thisUrl);

    const thisData = params ? response.data.data : response.data;

    return formatResponse ? formatResponse(thisData) : thisData;
  });

  return {
    data: data || initialData || [],
    error,
    dependencies,
    isLoading: !error && !data,
  };
};

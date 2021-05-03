/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
import useSWR from 'swr';

export const useFetch = <Data = any, Error = any>(url: string) => {
  const { data, error } = useSWR<Data, Error>(url, async (thisUrl) => {
    const response = await fetch(thisUrl);
    const thisData = await response.json();

    return thisData;
  });

  return { data, error };
};

export const useAxios = <Data = any, Error = any>(url: string) => {
  const { data, error, mutate } = useSWR<Data, Error>(url, async (thisUrl) => {
    const response = await axios.get(thisUrl);

    return response.data;
  });

  return { data, error, mutate };
};

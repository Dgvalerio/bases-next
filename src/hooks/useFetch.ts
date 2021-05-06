/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr';

export const useFetch = <Data = any, Error = any>(url: string) => {
  const { data, error } = useSWR<Data, Error>(url, async (thisUrl) => {
    const response = await fetch(thisUrl);
    const thisData = await response.json();

    return thisData;
  });

  return { data, error };
};

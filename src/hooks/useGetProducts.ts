import useSWR from 'swr';

/**
 * This hook is used to fetch client-side data using SWR
 * */

const url = 'api/cars.json';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetProducts = ( ) => {
    const { data, error } = useSWR(url, fetcher);
    
    return {
        items: data,
        isLoading: !error && !data,
        isError: error
    }
}

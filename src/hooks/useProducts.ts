import useSWR from 'swr';

/**
 * This hook is used to fetch client-side data using SWR
 * */

const url = 'api/cars.json';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useProducts = ( ) => {
    const { data, error } = useSWR(url, fetcher);
    
    return {
        items: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useProducts

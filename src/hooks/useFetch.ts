import { useEffect, useState } from "react";

interface stateInitial{
    data: any,
    isLoading: boolean,
    
}
export const useFetch = ( url: string) => {
    const [state, setState] = useState<stateInitial>({
        data: null,
        isLoading: true,
    })
    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
          
        });
    }
    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data:      state.data,
        isLoading: state.isLoading,
  
    };
}

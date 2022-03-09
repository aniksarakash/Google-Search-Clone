import React, {useState, useEffect} from 'react';
import apiKey from '../Keys';

const CONTEXT_KEY = "b5d09134a12be31b2";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        const fetchData = async ()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${CONTEXT_KEY}&q=${term}`
            , {signal:abortCont.signal}
            )
            .then(response => response.json())
            .then(result => setData(result));
        }
        fetchData();
        return () => {
            return abortCont.abort();
        }
    }, [term]);

    return {data};

};

export default useGoogleSearch;
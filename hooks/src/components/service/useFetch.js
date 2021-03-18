import React,{useState,useEffect} from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    async function getData() {
        const res = await fetch(url);
        const data = await res.json;
        setData(data)
    }
    useEffect(()=> {
        getData();
    },[]);
    return data;
};

export default UseFetch;

import React from 'react';
import useFetch from '../service/useFetch'
const DataLoaderHooks = (props) => {
    const data = useFetch("https://jsonplaceholder.typicode.com/users")
    return (
        <div>
            <ul>
                {data.map(el=>(
                    <li key={el.id}>{el.name} - {el.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataLoaderHooks;

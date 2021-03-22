
import axios from 'axios';
const baseUrl = 'http://localhost:3001/note';

//ricezione dati metodo GET
const getAll = () =>{
    return axios.get(baseUrl)
}

//invio dati POST
const create = newObj => {
    return axios.post(baseUrl, newObj)
}

//modifica dati PUT
const update =(id, newObj) => {
    return axios.put(`${baseUrl}/${id}`, newObj)
}

const exportedObject = {
    getAll,
    create,
    update
};

export default exportedObject;
import axios from 'axios';
const baseUrl = 'http://localhost:3008/note';

//ricezione dati metodo GET
const getAll = () => {
    return axios.get(baseUrl)
}

//invio dati POST
const create = newObj => {
    return axios.post(baseUrl, newObj)
}

//modifica dati PUT 
const update = (id, newObj) => {
    return axios.put(`${baseUrl}/${id}`, newObj)
}
//elimina dati DELETE
const elimina = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const exportedObject = {
    getAll,
    create,
    update,
    elimina
};

export default exportedObject;
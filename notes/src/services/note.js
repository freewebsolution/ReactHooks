import axios from 'axios';
const baseUrl = 'api/notes';

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}
//ricezione dati metodo GET
const getAll = () => {
    return axios.get(baseUrl)
}

//invio dati POST
const create = async newObj => {
    const config = {
        headers: {Authorization: token},
    }
    const response = await axios.post(baseUrl, newObj, config)
    return response.data
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
    elimina,
    setToken
};

export default exportedObject;

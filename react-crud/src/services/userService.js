import axios from 'axios';
const url = ' http://localhost:3004/userData';

//Ricevere dati metodo GET

const getAll = () => {
    return axios.get(url)
}

//Aggiungi nuovo user POST
const addUser = newObj => {
    return axios.post(url,newObj)
}

//Aggiorna user metodo PUT
const updateUser=(id,newObj) => {
    return axios.put(`${url}/${id}`,newObj)
}
//Elimina utente DELETE
const elimina = id =>{
    return axios.delete(`${url}/${id}`)
}
const exportedObj = {
    getAll,
    addUser,
    elimina,
    updateUser
}

export default exportedObj
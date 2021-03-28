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
const exportedObj = {
    getAll,
    addUser
}

export default exportedObj
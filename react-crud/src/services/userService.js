import axios from 'axios';
const url = ' http://localhost:3004/userData';

//Ricevere dati metodo GET

const getAll = () => {
    return axios.get(url)
}

//Aggiungi nuovo user POST
const addUser = user => {
    return axios.post(url,user)
}
const exportedObj = {
    getAll,
    addUser
}

export default exportedObj
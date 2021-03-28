import axios from 'axios';
const url =' http://localhost:3004/userData';

//Ricevere dati metodo GET

const getAll =() => {
    return axios.get(url)
}

const exportedObj = {
    getAll
}

export default exportedObj
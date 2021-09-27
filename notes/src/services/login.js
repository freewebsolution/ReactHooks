import axios from 'axios'
const baseurl = '/api/login'

const login = async credentials => {
    const response = await axios.post(baseurl, credentials)
    return response.data
}
const exportedObject = {
    login
};

export default exportedObject;
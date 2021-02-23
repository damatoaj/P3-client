import axios from 'axios';

//this utility will add authorizedf user's jwt to the request header

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log(axios.defaults.headers.common);
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}
export default setAuthToken
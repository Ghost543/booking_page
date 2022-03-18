import axios from 'axios'
import {toast} from 'react-toastify'

const client = axios.create({
    baseURL: "https://booking-api543.herokuapp.com/api/v1" 
  });
client.interceptors.response.use(null,error=>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500

    if (!expectedError) {
        console.error(error)
        toast.error("An Unexpected error occurred")
    }
    return Promise.reject(error)
})
const http = {
    get: client.get,
    post: client.post,
    put: client.put,
    delete: client.delete
}
export default http
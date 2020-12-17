import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://fifa-fut-21-data.herokuapp.com/'
})

export default axiosInstance

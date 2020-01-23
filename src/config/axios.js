import Axios from 'axios'
const axios=Axios.create({
    baseUrl:'http://localhost:3025'
})

export default axios
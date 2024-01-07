import axios from 'axios'

const APILink =  'https://code-collab-server.onrender.com/';

const API = axios.create({baseURL:APILink}) 

export const joinInterview = ()=>{
     
    let res = API.post('/auth/enterInterview',{email:"123",roomID:"123"})
    return res;
}
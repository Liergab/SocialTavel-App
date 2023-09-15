import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

// checking the token in localstorage
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

//   fetching data
export const GetUser = () => {
    const {data, isError, isLoading} = useQuery(['userData'], async() => {
        const response = await  axios.get('http://localhost:5001/v3/api/user')
        return response.data
    });

    return {data, isError, isLoading}
}

// login
export const LoginInUser = async(formdata) => {
    const response = await axios.post('http://localhost:5001/v3/api/login', formdata);
    const token = response.data.generateToken
    localStorage.setItem('token',token)
}

export const RegisterInUser = async(formdata) => {
    const response = await axios.post('http://localhost:5001/v3/api/register', formdata ,{
        headers:{
            'Content-Type':'multipart/form-data'
        },
        body: JSON.stringify(formdata)
    });
    return response.data  
}


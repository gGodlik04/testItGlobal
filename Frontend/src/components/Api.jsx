import axios from 'axios'
import { API_KEY } from './key';


export const getUsers = async () => {
    const data = await axios.get('/api' ,{withCredentials: false });

    return data;
}

export const getClientByName = async (ref) => {
    const data = await axios.get(

    );
}
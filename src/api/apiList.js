import axios from 'axios';
import { BASE_URL } from '../constants/common';

export const getUser = async () => {
    const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    };

    const response = await axios.get(`${BASE_URL}/users`, config);
    return response.data;
}
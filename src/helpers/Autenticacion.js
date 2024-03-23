import axios from 'axios';

import { URL } from '../data/URL'

// AUTENTICAMOS CON EL BACKEND Y RETORNAMOS LOS VALORES COMO TOKEN ID_USER Y USER_ACCESS
export const Autenticacion = async (loginUser) => {
    //console.log(loginUser)
    try {
        const dataUser = await axios.post(`${URL}api/authuser`, loginUser, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        return dataUser.data
    } catch (error) {
        if(error.response.status === 401){
            console.log('credenciales incorrectas')
        }
    }
}
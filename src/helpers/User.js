import axios from "axios";

import {URL} from "../data/URL"

export const userRegister = async (dataRegister) => {
    const URLRegister = `${URL}user/register`

    try {
        const responseRegister = await axios.post(URLRegister,dataRegister,{
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return responseRegister
    } catch (error) {
        if(error.response.status === 409){
            console.log('Error al registrar usuario')
        }
    }
    console.log(responseRegister)
}
//import { dataUsers } from "../data/dataUsuarios"

import axios from 'axios';

const access = [
    0,1
]

export const Autenticacion = async (loginUser) => {
    try {
        const dataUser = new Promise((resolve,reject)=>{
            axios.post('http://localhost:3030/api/authuser', loginUser, {
                headers: {
                  'Content-Type': 'application/json',
                },
            })
            .then(response =>{
                console.log(response.data)
                if(!response.data){return null}
                resolve(response.data)
            })
            .catch(err => {
                console.error('Error: ',err)
            })
        })
    } catch (error) {
        console.error(error)
        throw error
    }


    /*const dataUser = dataUsers.find(u => u.email == loginUser.email && u.password == loginUser.password)
    if(!dataUser){return null}
    return dataUser //se debe devolver un objeto con los datos del usuario*/
}
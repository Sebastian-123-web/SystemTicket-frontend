import { dataUsers } from "../data/dataUsuarios"

const access = [
    0,1
]

export const Autenticacion = async (loginUser) => {

    const dataUser = dataUsers.find(u => u.email == loginUser.email && u.password == loginUser.password)
    if(!dataUser){return null}
    return dataUser //se debe devolver un objeto con los datos del usuario
}
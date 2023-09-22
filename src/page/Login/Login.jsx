import { Button, Input, Spinner, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

import { useLoginContext } from '../../context/LoginContext'
import { Navigate } from "react-router-dom";

export const Login = () => {

    // OBTENER DATOS DE LOS INPUTS
    const [ dataLogin, setDataLogin ] = useState({
        email : '',
        password : ''
    })
    const handleCollectLoginUser = (e) => {
        const { name, value } = e.target
        setDataLogin((l) => ({
            ...l,
            [name] : value
        }))
        console.log(dataLogin)
    }

    // VALIDAR INICIO DE SESION
    const { login } = useLoginContext()
    const handleLoginUser = (collectLogin) => {
        login(collectLogin)
        Navigate('/dashboard')
    }

    // SPINNER DE CARGA
    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        setTimeout(()=>{ setLoading(false) },1000)
    },[] )

    return (
        <div className="w-full h-screen flex justify-center items-center">
            {
                loading ? (
                    <Spinner className="w-12 h-12" />
                ) : (
                    <div className="w-[400px] bg-white p-5 grid gap-5">
                        <Typography variant="h5" color="blue-gray">Sign Up</Typography>
                        <Input 
                            label="Correo"
                            type="email"
                            name="email"
                            onChange={handleCollectLoginUser}
                        />
                        <Input 
                            label="Contraseña" 
                            type="password"
                            name="password"
                            onChange={handleCollectLoginUser}
                        />
                        <Button 
                            onClick={()=>handleLoginUser(dataLogin)}    
                        >Iniciar Sesion</Button>
                    </div>
                )
            }
        </div>
    )
}

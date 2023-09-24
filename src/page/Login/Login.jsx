import { useEffect, useState } from "react";

import { Button, Input, Spinner, Typography } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

import { useLoginContext } from '../../context/LoginContext'

export const Login = () => {

    // MANEJO DE VER LA CONTRASEÑA
    const [ showPassword, setShowPassword ] = useState(true)

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
    }

    // VALIDAR INICIO DE SESION
    const { login } = useLoginContext()
    const [ changeInputError, setChangeInputError] = useState(true)
    const handleLoginUser = async(collectLogin) => {
        login(collectLogin) ? setChangeInputError(true) : setChangeInputError(false)
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
                        <div className="relative">
                            <Input
                                label="Contraseña" 
                                type={ !showPassword ? '' : 'password' }
                                name="password"
                                onChange={handleCollectLoginUser}
                            />
                            <div className="absolute top-2.5 right-4">
                                { !showPassword ? <EyeIcon className="w-5 h-5" onClick={()=>setShowPassword(true)} /> : <EyeSlashIcon className="w-5 h-5" onClick={()=>setShowPassword(false)} /> }
                            </div>
                        </div>
                        <Button 
                            onClick={()=>login(dataLogin)}    
                        >Iniciar Sesion</Button>
                    </div>
                )
            }
        </div>
    )
}

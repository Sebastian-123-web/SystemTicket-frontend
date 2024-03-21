import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

import { Button, Input, Spinner, Typography, Card, CardBody } from "@material-tailwind/react"
import { EyeIcon, EyeSlashIcon, ArrowLeftOnRectangleIcon, UserPlusIcon } from '@heroicons/react/24/solid'

import { useLoginContext } from '../../context/LoginContext'
import { IllustrationIconLogIn } from '../../components/Ilustraciones/IllustrationIconLogIn'

export const Login = () => {

    // MANEJO DE VER LA CONTRASEÑA
    const [ showPassword, setShowPassword ] = useState(true)

    // OBTENER DATOS DE LOS INPUTS
    const [ dataLogin, setDataLogin ] = useState({
        user_email : '',
        passClient : ''
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
    const [ changeInputError, setChangeInputError] = useState(false)
    const handleLoginUser = async(collectLogin) => {
        await login(collectLogin) ? setChangeInputError(false) : setChangeInputError(true)
    }

    // SPINNER DE CARGA
    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        setTimeout(()=>{ setLoading(false) },1000)
    },[] )

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-3/6 h-screen flex justify-center items-center">
                {
                    loading ? (
                        <Spinner className="w-12 h-12" />
                    ) : (
                        <div className="w-[400px] bg-white p-5 grid gap-5 rounded-lg">
                            <Typography variant="h4" color="blue-gray">Iniciar Sesion</Typography>
                            <Input
                                label="Correo"
                                type="email"
                                name="user_email"
                                onChange={handleCollectLoginUser}
                                error={changeInputError}
                            />
                            <div className="relative">
                                <Input
                                    label="Contraseña"
                                    type={ !showPassword ? '' : 'password' }
                                    name="passClient"
                                    onChange={handleCollectLoginUser}
                                    error={changeInputError}
                                />
                                <div className="absolute top-2.5 right-4">
                                    { !showPassword ? <EyeIcon className="w-5 h-5" onClick={()=>setShowPassword(true)} /> : <EyeSlashIcon className="w-5 h-5" onClick={()=>setShowPassword(false)} /> }
                                </div>
                            </div>
                            <Link to="/resetpassword" className="text-blue-600 text-sm">¿Has olvidado tu contraseña?</Link>
                            <Button
                                className="flex justify-center items-center"
                                onClick={()=>{login(dataLogin);handleLoginUser(dataLogin)}} >
                                <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" /> Iniciar Sesion
                            </Button>

                            <Link to="/register" className="w-full">
                                <Button color="blue" className="w-full flex justify-center items-center"> 
                                    <UserPlusIcon className="w-5 h-5 mr-3" /> Registrarse
                                </Button>
                            </Link>
                        </div>
                    )
                }
            </div>
            <div className="w-3/6 h-screen bg-black flex justify-center items-center ">
                <div className="relative bg-blue-gray-200  w-[500px] h-[500px] flex justify-center items-center rounded-full">
                    <IllustrationIconLogIn className="absolute" />
                </div>
            </div>
        </div>
    )
}

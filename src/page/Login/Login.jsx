import { useEffect, useState } from "react"

import { Button, Input, Spinner, Typography, Card, CardBody } from "@material-tailwind/react"
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

import { useLoginContext } from '../../context/LoginContext'
import { UploadImage } from "../../components/UploadImage/UploadImage"

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
            <div className="w-3/6 h-screen bg-deep-orange-600 flex justify-center items-center">
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
                            <Button
                                onClick={()=>{login(dataLogin);handleLoginUser(dataLogin)}} 
                            >Iniciar Sesion</Button>
                        </div>
                    )
                }
            </div>
            <div className="w-3/6 h-screen bg-light-green-800 flex justify-center items-center ">
                <div className="w-[400px] bg-white p-5 grid gap-5 rounded-lg">
                    <Typography variant="h4">Registrarse</Typography>
                    <Input label="Nombre" />
                    <Input label="Apellido" />
                    <Input label="E-mail" />
                    <Input label="Celular" />
                    <Input label="Numero de Anexo" />
                    <Input label="Ingrese contraseña" />
                    <Input label="Repita contraseña" />
                    <div>
                        <Typography variant="h5">Subir una Foto de Perfil</Typography>
                        <UploadImage />
                    </div>
                    <Button>Registrarse</Button>
                </div>
            </div>
        </div>
    )
}

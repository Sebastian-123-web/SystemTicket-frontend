import React, { useState } from "react";
import {
    Stepper,
    Step,
    Button,
    Typography,
    Input,
} from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon, EyeIcon, EyeSlashIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

import { Back } from "../../components/Back/Back";
import { UploadImage } from "../../components/UploadImage/UploadImage";
import { IllustrationIconSignUp } from "../../components/Ilustraciones/IllustrationIconSignUp";

import { userRegister } from "../../helpers/User"

export const Register = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const handleRegister = () => {
        const responseRegister = userRegister()
        console.log(responseRegister)
    }
    
    // MOSTRAR CONTRASEÑA
    const [showPassword, setShowPassword] = useState(true)

    // COMPARAR CONTRASEÑA
    const [comparePassword, setComparePassword] = useState("")
    const handleComparePassword = () => {
        
    }

    // OBTENGO LOS DATOS DEL REGISTRO DE USUARIO
    const [dataRegister, setDataRegister] = useState({
        user_name : '',
        user_lastname : '',
        user_email : '',
        user_phone : '',
        user_annex : '',
        user_password : '',
        user_photo : '',
    })

    const handleSendRegister = (e) => {
        const { name, value } = e.target
        setDataRegister((d)=>({
            ...d,
            [name] : value
        }))
    }

    return (
        <div className="w-full h-screen flex flex-row-reverse justify-center items-center">
            <div className="w-[50%] h-[100%] flex justify-center items-center">
                <div className="w-[400px] bg-white p-5 grid gap-5">
                    <div className="w-[90px]">
                        <Back />
                    </div>

                    <Typography variant="h4">Registrarse</Typography>

                    <div className="w-full">
                        <form action="">
                            <Stepper
                                className="mb-5"
                                activeStep={activeStep}
                                isLastStep={(value) => setIsLastStep(value)}
                                isFirstStep={(value) => setIsFirstStep(value)}
                            >
                                <Step onClick={() => setActiveStep(0)}>1</Step>
                                <Step onClick={() => setActiveStep(1)}>2</Step>
                                <Step onClick={() => setActiveStep(2)}>3</Step>
                            </Stepper>
                            <div>
                                
                                {activeStep === 0 && (
                                    <div className="grid gap-5">
                                        <Input 
                                            label="Nombre"
                                            type="text"
                                            name="user_name"
                                            onChange={handleSendRegister}
                                            value={dataRegister.user_name}
                                            required />
                                        <Input 
                                            label="Apellido"
                                            type="text"
                                            name="user_lastname"
                                            onChange={handleSendRegister} 
                                            value={dataRegister.user_lastname}
                                            required />
                                        <Input 
                                            label="E-mail"
                                            type="email"
                                            name="user_email"
                                            onChange={handleSendRegister} 
                                            value={dataRegister.user_email}
                                            required />
                                        <Input 
                                            label="Celular"
                                            type="number"
                                            name="user_phone"
                                            onChange={handleSendRegister} 
                                            value={dataRegister.user_phone} />
                                        <Input 
                                            label="Numero de Anexo"
                                            type="number"
                                            name="user_annex"
                                            onChange={handleSendRegister} 
                                            value={dataRegister.user_annex} />
                                    </div>
                                )}
                                {activeStep === 1 && (
                                    <div className="grid gap-5">
                                        <div className="relative">
                                            <Input 
                                                label="Ingrese contraseña"
                                                type={ !showPassword ? 'text' : 'password' }
                                                name="user_password"
                                                onChange={handleSendRegister} 
                                                required />
                                            <div className="absolute top-2.5 right-4">
                                                { !showPassword ? <EyeIcon className="w-5 h-5" onClick={()=>setShowPassword(true)} /> : <EyeSlashIcon className="w-5 h-5" onClick={()=>setShowPassword(false)} /> }
                                            </div>
                                            <div className="absolute top-2.5 right-[-30px]">
                                                { dataRegister.user_password == "" ? " " : <CheckCircleIcon className="w-5 h-5" color="green" /> } 
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <Input 
                                                label="Repita contraseña"
                                                type={ !showPassword ? 'text' : 'password' }
                                                onChange={()=>setComparePassword}
                                                value={comparePassword}
                                                required />
                                            <div className="absolute top-2.5 right-[-30px]">
                                                <CheckCircleIcon className="w-5 h-5" color="green" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeStep === 2 && (
                                    <div>
                                        <Typography variant="h5">Subir una Foto de Perfil</Typography>
                                        <UploadImage />
                                    </div>
                                )}
                            </div>
                            <div className="mt-5 flex justify-between">
                                <Button onClick={handlePrev} disabled={isFirstStep}>
                                    <ArrowLeftIcon width={20} />
                                </Button>
                                <Button onClick={handleNext} disabled={isLastStep} className={isLastStep ? "hidden" : "inline"}>
                                    <ArrowRightIcon width={20} />
                                </Button>
                                <Button color="blue" onClick={()=>handleRegister()} className={isLastStep ? "inline" : "hidden"}>
                                    Registarse
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <div className="w-[50%] h-[100%] bg-black flex justify-center items-center">
                <div className="relative bg-blue-gray-200 w-[500px] h-[500px] rounded-full flex justify-center items-center">
                    <IllustrationIconSignUp className="absolute" />
                </div>
            </div>
        </div>
    );
};

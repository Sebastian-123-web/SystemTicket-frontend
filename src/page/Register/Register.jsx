import React from "react";
import {
    Stepper,
    Step,
    Button,
    Typography,
    Input,
} from "@material-tailwind/react";

import { Back } from "../../components/Back/Back";
import { UploadImage } from "../../components/UploadImage/UploadImage";
import { IllustrationIconSignUp } from "../../components/Ilustraciones/IllustrationIconSignUp";

export const Register = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <div className="w-full h-screen flex flex-row-reverse justify-center items-center">
            <div className="w-[50%] h-[100%] flex justify-center items-center">
                <div className="w-[400px] bg-white p-5 grid gap-5">
                    <div className="w-[90px]">
                        <Back />
                    </div>

                    <Typography variant="h4">Registrarse</Typography>

                    <div className="w-full">
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
                                    <Input label="Nombre" />
                                    <Input label="Apellido" />
                                    <Input label="E-mail" />
                                    <Input label="Celular" />
                                    <Input label="Numero de Anexo" />
                                </div>
                            )}
                            {activeStep === 1 && (
                                <div className="grid gap-5">
                                    <Input label="Ingrese contraseña" />
                                    <Input label="Repita contraseña" />
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
                                Prev
                            </Button>
                            <Button onClick={handleNext} disabled={isLastStep}>
                                Next
                            </Button>
                        </div>
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

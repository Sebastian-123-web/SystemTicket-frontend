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
    <div className="w-full h-screen bg-orange-900 flex flex-row justify-center items-center">
      <div className="w-[50%] h-[100%]">
        <div className="w-[90px]">
          <Back />
        </div>

        <div className="w-full py-4 px-8">
          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
          >
            <Step onClick={() => setActiveStep(0)}>1</Step>
            <Step onClick={() => setActiveStep(1)}>2</Step>
            <Step onClick={() => setActiveStep(2)}>3</Step>
          </Stepper>
          <div>
            <Typography variant="h4">Registrarse</Typography>
            {activeStep === 0 && (
              <div>
                <Input label="Nombre" />
                <Input label="Apellido" />
                <Input label="E-mail" />
                <Input label="Celular" />
                <Input label="Numero de Anexo" />
              </div>
            )}
            {activeStep === 1 && (
              <div>
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
          <div className="mt-16 flex justify-between">
            <Button onClick={handlePrev} disabled={isFirstStep}>
              Prev
            </Button>
            <Button onClick={handleNext} disabled={isLastStep}>
              Next
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[100%] bg-teal-700">
                <IllustrationIconSignUp />
      </div>
    </div>
  );
};

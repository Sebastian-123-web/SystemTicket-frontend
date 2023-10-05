import React, { useState } from "react";

import { Card, Typography, Stepper, Step } from "@material-tailwind/react";

export const StatusProgressBar = () => {

  // BARRA DE PROGRO DE ESTADOS
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <Card className="h-[calc(100%-46px)] py-5 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <div className="absolute bottom-[-30px] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Nuevo
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <div className="absolute bottom-[-30px] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Abierto
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <div className="absolute bottom-[-30px] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Pendiente
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(3)}>
          <div className="absolute bottom-[-30px] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              En proceso
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(4)}>
          <div className="absolute bottom-[-30px] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Resuelto
            </Typography>
          </div>
        </Step>
      </Stepper>

      {/* <div className="flex justify-between">
            <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
            </Button>
            <Button onClick={handleNext} disabled={isLastStep}>
            Next
            </Button>
        </div> */}
    </Card>
  );
};

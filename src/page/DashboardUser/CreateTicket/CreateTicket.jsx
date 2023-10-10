import React from 'react'
import { Card, Stepper, Step, Button, Typography, Input, Textarea } from '@material-tailwind/react'

import { TopBar } from '../../../components/TopBar/TopBar'
import { New } from '../New/New'

export const CreateTicket = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <>
            <TopBar TitleSection={"Crear Ticket"} />
            <div className='h-[calc(100%-124px)] mt-6 grid grid-cols-12 grid-rows-6 gap-6'>
                <Card className='p-5 col-span-9 row-span-6 flex items-center'>
                    <div className="w-[70%] py-4 px-8 flex justify-between flex-col">
                        <Stepper
                            activeStep={activeStep}
                            isLastStep={(value) => setIsLastStep(value)}
                            isFirstStep={(value) => setIsFirstStep(value)}
                            className='mb-5'
                        >
                            <Step onClick={() => setActiveStep(0)}>1</Step>
                            <Step onClick={() => setActiveStep(1)}>2</Step>
                            <Step onClick={() => setActiveStep(2)}>3</Step>
                        </Stepper>

                        <div className=''>
                            <Typography>
                                Descricion brave:
                            </Typography>
                            <Input label='Descripcion breve' />
                            <Textarea />
                            <Input label='Codigo de Anydesk' />
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
                </Card>

                <New col='col-span-3' row='row-span-6' />
            </div>
        </>
    )
}

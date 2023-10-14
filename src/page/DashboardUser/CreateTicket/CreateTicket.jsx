import { useState } from 'react'
import { Card, Stepper, Step, Button, Typography, Input, Textarea } from '@material-tailwind/react'
import { ComputerDesktopIcon, DevicePhoneMobileIcon, PrinterIcon } from '@heroicons/react/24/solid'

import '../../../index.css'

import { TopBar } from '../../../components/TopBar/TopBar'
import { New } from '../New/New'

export const CreateTicket = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);


    // VISTA PREVIA DE LA IMAGEN
    const [imgPreview, setImgPreview] = useState("")
    const imagenPreview = (e) => {
        if(e.target.files[0]){
            const reader = new FileReader()
            reader.onload = function(e){
                setImgPreview(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
        }else{
            setImgPreview("")
        }
    }

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
                        {
                            activeStep === 0 && (
                                <div className='flex flex-col gap-3'>
                                    <div>
                                        <Typography>Descripcion breve:</Typography>
                                        <Input
                                            placeholder="Ej.: Error abrir SIDIGE"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                            className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <Typography>Detalle el incidente:</Typography>
                                        <Textarea
                                            placeholder="Ej.: Al momento de ingresar al SIDIGE me aparece un mensaje de error y luego se cierra"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                            className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <Typography>Codigo Anydesk:</Typography>
                                        <Input
                                            placeholder="Ej.: 1 951 654 785"
                                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                            className: "before:content-none after:content-none",
                                            }}
                                        />
                                    </div>
                                </div>
                            )
                        }
                        {
                            activeStep === 1 && (
                                <div>
                                    <div className='radioDevice'>
                                        <Typography>Seleccione el dispositivo:</Typography>
                                        <div className='radioDevice flex justify-between mb-4'>
                                            <label>
                                                <input type="radio" name='device' value="desktop" className='none' />
                                                <div 
                                                    className={`w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#270722b3] hover:text-[#fff] duration-300 cursor-pointer`}
                                                    title="Computadora">
                                                        <p className="text-3xl">
                                                            <ComputerDesktopIcon className='w-8' />
                                                        </p>
                                                </div>
                                            </label>
                                            <label>
                                                <input type="radio" name='device' value="laptop" className='none' />
                                                <div 
                                                    className={`w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#270722b3] hover:text-[#fff] duration-300 cursor-pointer`}
                                                    title="Laptop">
                                                        <p className="text-3xl">
                                                            L
                                                        </p>
                                                </div>
                                            </label>
                                            <label>
                                                <input type="radio" name='device' value="movil" className='none' />
                                                <div 
                                                    className={`w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#270722b3] hover:text-[#fff] duration-300 cursor-pointer`}
                                                    title="Celular">
                                                        <p className="text-3xl">
                                                            <DevicePhoneMobileIcon className='w-8' />
                                                        </p>
                                                </div>
                                            </label>
                                            <label>
                                                <input type="radio" name='device' value="impresora" className='none' />
                                                <div 
                                                    className={`w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#270722b3] hover:text-[#fff] duration-300 cursor-pointer`} 
                                                    title="Impresora">
                                                        <p className="text-3xl">
                                                            <PrinterIcon className='w-8' />
                                                        </p>
                                                </div>
                                            </label>
                                        </div>
                                        <div className='relative mb-4'>
                                            <p className='mb-3'>Añadir una imagen: <span className='text-[#9AAFC7]'>(Opcional)</span></p>
                                            <div className={`absolute ${imgPreview ? "hidden" : "flex"} justify-center items-center w-full h-[80px] rounded-md bg-[#FFF] border border-slate-300`}>
                                                <label htmlFor="imagen" className='text-[#9AAFC7]' ><ion-icon name="image-outline"></ion-icon> Añadir imagen</label>
                                            </div>
                                            <img src={`${imgPreview}`} alt="" className={`${imgPreview ? "" : "hidden"} absolute h-[80px] rounded-md bg-[#FFF] border border-slate-300 left-[50%] translate-x-[-50%]`} />
                                            <input type="file" id='imagen' multiple className='opacity-0 w-full h-[80px]' onChange={imagenPreview} />
                                        </div>
                                    </div>
                                </div>
                            )
                        }

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

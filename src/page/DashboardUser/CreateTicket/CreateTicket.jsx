import { useEffect, useState } from 'react'
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
    const [imgPreview, setImgPreview] = useState([])
    const imagenPreview = (e) => {
        const img = []
        for (let i = 0; i < e.target.files.length; i++) {
            if(e.target.files[i]){
                const reader = new FileReader()
                reader.onload = function(e){
                    img.push(e.target.result)
                    setImgPreview(img)
                }
                reader.readAsDataURL(e.target.files[i])
            }else{
                setImgPreview("")
            }
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
                            {/* <Step onClick={() => setActiveStep(2)}>3</Step> */}
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
                                <div className='flex flex-col gap-3'>
                                    <div className='radioDevice'>
                                        <Typography>Seleccione el dispositivo:</Typography>
                                        <div className='radioDevice flex justify-between mb-4'>
                                            <label>
                                                <input type="radio" name='device' value="desktop" className='none' />
                                                <div 
                                                    className={`w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#212121] hover:text-[#fff] duration-300 cursor-pointer`}
                                                    title="Computadora">
                                                        <p className="text-3xl">
                                                            <ComputerDesktopIcon className='w-8' />
                                                        </p>
                                                </div>
                                            </label>
                                            <label>
                                                <input type="radio" name='device' value="laptop" className='none' />
                                                <div 
                                                    className={`w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#212121] hover:text-[#fff] duration-300 cursor-pointer`}
                                                    title="Laptop">
                                                        <p className="text-3xl">
                                                            L
                                                        </p>
                                                </div>
                                            </label>
                                            <label>
                                                <input type="radio" name='device' value="movil" className='none' />
                                                <div 
                                                    className={`w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#212121] hover:text-[#fff] duration-300 cursor-pointer`}
                                                    title="Celular">
                                                        <p className="text-3xl">
                                                            <DevicePhoneMobileIcon className='w-8' />
                                                        </p>
                                                </div>
                                            </label>
                                            <label>
                                                <input type="radio" name='device' value="impresora" className='none' />
                                                <div 
                                                    className={`w-16 h-16 border border-slate-300 bg-[#fff] rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#212121] hover:text-[#fff] duration-300 cursor-pointer`} 
                                                    title="Impresora">
                                                        <p className="text-3xl">
                                                            <PrinterIcon className='w-8' />
                                                        </p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className='relative'>
                                        <p className='mb-3'>Añadir una imagen: <span className='text-[#9AAFC7]'>(Opcional)</span></p>
                                        <div className='flex flex-col justify-center'>
                                            <div className='w-full inline-flex flex-wrap gap-3 justify-center mb-3'>
                                                {
                                                    imgPreview.map((i,k)=>(
                                                        <div 
                                                            key={k} 
                                                            className='w-[80px] h-[80px] overflow-hidden'
                                                            >
                                                            <img src={i} alt="" className={`flex w-full h-full rounded-md bg-[#FFF] border border-slate-300`} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div>
                                                <div className={`absolute flex justify-center items-center w-full h-[60px] rounded-md bg-[#f3f5f9] border border-[#212121] border-dashed border-slate-300`}>
                                                    <label htmlFor="imagen" className='text-[#9AAFC7]' ><ion-icon name="image-outline"></ion-icon> Añadir imagen</label>
                                                </div>
                                                <input type="file" id='imagen' multiple className='opacity-0 w-full h-[60px]' onChange={imagenPreview} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        <div className="mt-3 flex justify-between">
                            <Button onClick={handlePrev} disabled={isFirstStep}>
                                Atras
                            </Button>
                            <Button onClick={handleNext}>
                                { !isLastStep ? "Siguiente" : "Enviar" }
                            </Button>
                        </div>
                    </div>
                </Card>

                <New col='col-span-3' row='row-span-6' />
            </div>
        </>
    )
}

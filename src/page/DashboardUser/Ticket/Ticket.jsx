
// TERCEROS
import { Card, Typography, Chip, Input, ButtonGroup, Button, Tooltip } from '@material-tailwind/react'
import { ComputerDesktopIcon, PaperAirplaneIcon, CheckCircleIcon, DocumentArrowDownIcon } from '@heroicons/react/24/solid'

// FUNCIONES DEL PROYECTO

// COMPONENTE DEL PROYECTO
import { TopBar } from '../MyTicket/TopBar/TopBar'
import { New } from '../New/New'
import { StatusProgressBar } from './StatusProgressBar/StatusProgressBar'
import { ViewImage } from './ViewImage/ViewImage'
import { Back } from '../../../components/Back/Back'

const imagenes = [
    {
        imge : "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2021/01/pantallazo-azul-2204185.jpg?tf=3840x"
    },
    {
        imge : "https://i.ytimg.com/vi/KJAqp9ey5XM/maxresdefault.jpg"
    },
    {
        imge : "https://learn.microsoft.com/es-es/windows/win32/uxguide/images/mess-error-image44.png"
    },
]

export const Ticket = () => {

    return (
        <>
            {/* BARRA SUPERIOR DE TITULO Y USUARIO */}
            <TopBar />

            <div className='h-[calc(100%-124px)] mt-6 grid grid-cols-12 grid-rows-6 gap-6'>
                <div className='col-span-9 row-span-2 '>
                    <div className='flex items-center justify-between'>
                        <Back />
                        <div className='mb-3'>
                            <Tooltip content="Marcar como Ticket resuelto">
                                <Button className='mr-2'><CheckCircleIcon className='w-4' /> </Button>
                            </Tooltip>
                            <Tooltip content="Descargar informe completo sobre la incidencia">
                                <Button className='mr-2'><DocumentArrowDownIcon className='w-4' /> </Button>
                            </Tooltip>
                        </div>
                    </div>

                    <StatusProgressBar />
                </div>
                
                {/* COMPONENTE DE NOTICIAS  */}
                <New col='col-span-3' row='row-span-2' />

                <Card className='col-span-5 row-span-2 p-5 flex flex-row justify-between'>
                    <div className='flex flex-col justify-between'>
                        <Typography variant='h5'>Ticket #12</Typography>
                        <Typography variant='small'>No puedo Ingresar a SIDIGE</Typography>
                        <div className='flex items-center'>
                            <Typography variant='small' className='mr-1'>Anydesk:</Typography>
                            <Typography variant='h6' color='red'>482632780</Typography>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <Chip
                            variant="outlined"
                            color="red"
                            size="sm"
                            value="Urgente"
                            className="w-[100px] text-center"
                        />
                        <div className='flex justify-end'>
                            <ComputerDesktopIcon className='w-10 h-10' />
                        </div>
                    </div>
                </Card>

                <Card className='col-span-4 row-span-5 p-5'>
                    <Typography variant='h5' className='mb-2'>Descripcion</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut minima, saepe quia optio perferendis excepturi nesciunt, dolorum accusantium ipsam pariatur. Soluta illum placeat ex architecto exercitationem in, nihil molestiae.</Typography>
                </Card>

                <Card className='col-span-3 row-span-5 relative p-5'>
                    <div className='flex items-center mb-3'>
                        <span className='w-3 h-3 mr-2 bg-green-800 rounded-full'></span>
                        <Typography variant='h5'>Chat</Typography>
                    </div>
                    <div className='py-1 px-3 mb-2 text-start text-black bg-[#e0e0e0] rounded-t-md rounded-br-lg'>
                        holaaaaaaaaa
                    </div>
                    <div className='py-1 px-3 mb-2 text-end text-white bg-black rounded-t-md rounded-bl-lg'>
                        Ya estamos resolviendo su problema
                    </div>
                    <div className='py-1 px-3 mb-2 text-start text-black bg-[#e0e0e0] rounded-t-md rounded-br-lg'>
                        Ya era hora
                    </div>
                    <div className='absolute bottom-5'>
                        <Input 
                            placeholder='Enviar un mensaje'
                            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                                className: "hidden",
                            }}
                            />
                        <PaperAirplaneIcon className='absolute top-1.5 right-1 w-6 h-6' />
                    </div>
                </Card>


                {/* VISUALIZACION DE IMAGENES  */}
                <ViewImage imagenes={imagenes} />

            </div>
        </>
    )
}

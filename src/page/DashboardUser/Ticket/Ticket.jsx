
// TERCEROS
import { Card, Typography, Chip, Button, Tooltip } from '@material-tailwind/react'
import { ComputerDesktopIcon, CheckCircleIcon, DocumentArrowDownIcon } from '@heroicons/react/24/solid'

// FUNCIONES DEL PROYECTO

// COMPONENTE DEL PROYECTO
import { TopBar } from '../../../components/TopBar/TopBar'
import { New } from '../New/New'
import { StatusProgressBar } from './StatusProgressBar/StatusProgressBar'
import { ViewImage } from './ViewImage/ViewImage'
import { Back } from '../../../components/Back/Back'

import '../../../index.css'
import { Chat } from '../../../components/Chat/Chat'

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
            <TopBar TitleSection={"Mis Tickets"} />

            <div className='h-[calc(100%-124px)] overflow-y-scroll chat-container xl:bg-[#f3f5f9] mt-6 grid grid-cols-12 xl:grid-rows-6 gap-6'>
                <div className='col-span-12 xl:col-span-9 row-span-2 '>
                    <div className='flex items-center justify-between mb-2'>
                        <Back />
                        <div className=''>
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

                <Card className='col-span-12 xl:col-span-5 row-span-2 p-5 flex flex-row justify-between'>
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

                <Card className='col-span-12 xl:col-span-4 row-span-5 p-5'>
                    <Typography variant='h5' className='mb-2'>Descripcion</Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut minima, saepe quia optio perferendis excepturi nesciunt, dolorum accusantium ipsam pariatur. Soluta illum placeat ex architecto exercitationem in, nihil molestiae.</Typography>
                </Card>


                {/* AQUI ESTA EL CHAT */}
                <Chat />

                {/* VISUALIZACION DE IMAGENES  */}
                <ViewImage imagenes={imagenes} />

            </div>
        </>
    )
}

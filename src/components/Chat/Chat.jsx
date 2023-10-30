import React from 'react'

// TERCEROS
import { Card, Typography, Input,} from '@material-tailwind/react'
import { PaperAirplaneIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid'

export const Chat = () => {
  return (
    <>
        <div className='border border-black rounded-full w-16 h-16 flex justify-center items-center'>
            <ChatBubbleOvalLeftIcon className='w-10' />
        </div>
        <Card className='col-span-12 xl:col-span-3 row-span-5 p-5 relative flex justify-between'>
            <div className='flex items-center mb-3'>
                <span className='w-3 h-3 mr-2 bg-green-800 rounded-full'></span>
                <Typography variant='h5'>Chat</Typography>
            </div>
            <div className='overflow-y-auto h-[calc(100%-77px)] mb-4 flex flex-col-reverse rounded-lg chat-container'>
                <div className='flex flex-col'>
                    <div className='py-1 px-3 mb-2 table text-start text-black bg-[#e0e0e0] rounded-t-md rounded-br-lg'>
                        holaaaaaaaaa
                    </div>
                    <div className='py-1 px-3 mb-2 text-end text-white bg-black rounded-t-md rounded-bl-lg'>
                        Ya estamos resolviendo su problema
                    </div>
                    <div className='py-1 px-3 mb-2 text-start text-black bg-[#e0e0e0] rounded-t-md rounded-br-lg'>
                        Ya era hora
                    </div>
                    <div className='py-1 px-3 mb-2 text-start text-black bg-[#e0e0e0] rounded-t-md rounded-br-lg'>
                        llevo una semana con este problema y aun no lo solucionan
                    </div>
                    <div className='py-1 px-3 text-end text-white bg-black rounded-t-md rounded-bl-lg'>
                        Disculpe la demora pero puede irse a la mrd, si quiere le consigo el vehiculo
                    </div>
                </div>
            </div>
            <div className="relative">
                <Input
                    placeholder='Enviar un mensaje'
                    className="w-full pr-8 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                        className: "hidden",
                    }}
                />
                <PaperAirplaneIcon className='absolute top-1.5 right-1 w-6 h-6' />
            </div>
        </Card>
    </>
  )
}

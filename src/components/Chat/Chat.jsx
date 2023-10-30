import { useState } from 'react'

// TERCEROS
import { Card, Typography, Input, IconButton } from '@material-tailwind/react'
import { PaperAirplaneIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid'

export const Chat = () => {

    const [msmChat, setMsmChat] = useState(false)
    const viewChat = () => {
        msmChat ? setMsmChat(false) : setMsmChat(true)
    }

  return (
    <>
        <buttom 
            className='fixed xl:hidden bottom-[10px] right-[10px] z-[100] rigth-10 flex justify-center items-center w-16 h-16 bg-[#282828] text-gray-300 rounded-full '
            onClick={viewChat}
        >
            <ChatBubbleOvalLeftIcon className='w-10' />
        </buttom>
        {/* <div className={`${msmChat ? "absolute" : "hidden" } w-full h-screen z-[995] bg-black bg-opacity-60 backdrop-blur-sm`} onClick={viewChat}></div> */}
        <Card className={`${msmChat ? "fixed z-[995] bottom-[85px] right-[10px] w-[80%] sm:w-[420px] h-[400px]" : "hidden"} col-span-12 xl:col-span-3 row-span-5 p-5 xl:flex justify-between bg-[#282828] xl:bg-white text-white xl:text-black `}>
            <div className='flex items-center mb-3'>
                <span className='w-3 h-3 mr-2 bg-green-800 rounded-full'></span>
                <Typography variant='h5'>Chat</Typography>
            </div>
            <div className='overflow-y-auto h-[calc(100%-77px)] mb-4 flex flex-col-reverse rounded-lg chat-container'>
                <div className='flex flex-col'>
                    <div className='py-1 px-3 mb-3 table text-start text-black bg-[#e0e0e0] rounded-t-md rounded-br-lg'>
                        holaaaaaaaaa
                    </div>
                    <div className='py-1 px-3 mb-3 text-end text-white bg-black rounded-t-md rounded-bl-lg'>
                        Ya estamos resolviendo su problema
                    </div>
                    <div className='py-1 px-3 mb-3 text-start text-black bg-[#e0e0e0] rounded-t-md rounded-br-lg'>
                        Ya era hora
                    </div>
                    <div className='py-1 px-3 mb-3 text-start text-black bg-[#e0e0e0] rounded-t-md rounded-br-lg'>
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
                    className="w-full pr-8 !border !border-gray-700 bg-black text-white shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-300 focus:!border-t-gray-300 focus:ring-gray-900/10"
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

import { React } from 'react'

import { Card, Typography, Input } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export const TitleBard = () => {
  return (
    <>
        <Card className='col-span-9 row-span-1 p-5'>
            <div className='flex justify-between items-center h-full' >
                <Typography variant='h5'>Ticket Generados</Typography>
                <div className='relative'>
                    <Input
                        placeholder='Buscar'
                        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                            className: "hidden",
                        }}
                    />
                    <MagnifyingGlassIcon className='absolute right-3 top-2.5 w-5 h-5' />
                </div>
            </div>
        </Card>
    </>
  )
}

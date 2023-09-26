import React from 'react'

import { Card, Input } from '@material-tailwind/react'

export const MyTicket = () => {
  return (
    <>
      <Card className='h-[100px]'>
          hola
      </Card>
      <div className='h-[calc(100%-124px)] mt-6 grid grid-cols-12 grid-rows-6 gap-6'>
          <Card className='col-span-9 row-span-1 p-5'>
            <div className='flex flex-rows' >
              <h1>Ticket Generados</h1>
              <div className=' relative '>
                <Input 
                  placeholder='Buscar' 
                  className='w-30'
                  />
                <div>
                  
                </div>
              </div>
            </div>
          </Card>
          <Card className='col-span-3 row-span-6 p-5'>Noticias</Card>
          <Card className='col-span-9 row-span-5 p-5'>card 3</Card>
      </div>
    </>
  )
}

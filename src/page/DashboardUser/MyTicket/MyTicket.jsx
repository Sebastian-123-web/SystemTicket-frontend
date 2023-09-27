import React from 'react'

import {
            Typography,
            Card, 
            Input,
            table,
            thead,
            tbody,
            tr,
            th,
            td
        } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { TopBar } from './TopBar/TopBar'

const TABLE_HEAD = ["#", "Descripcion", "Importancia", "Estado", "Dispositivo", "Opciones"];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

export const MyTicket = () => {
    return (
        <>
            <TopBar />

            <div className='h-[calc(100%-124px)] mt-6 grid grid-cols-12 grid-rows-6 gap-6'>
                <Card className='col-span-9 row-span-1 p-5'>
                    <div className='flex flex-row items-center justify-between' >
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
                <Card className='col-span-3 row-span-6 p-5'>
                    <Typography variant='h5'>Noticias</Typography>
                </Card>
                {/* <Card className='col-span-9 row-span-5 p-5'>
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">#</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Titulo</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Importancia</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Estado</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Dispositivo</th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Menu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="even:bg-blue-gray-50/50">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        #
                                    </Typography>
                                </td>
                                <td className="even:bg-blue-gray-50/50">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        Error con SIDIGE
                                    </Typography>
                                </td>
                                <td className="even:bg-blue-gray-50/50">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        Medio
                                    </Typography>
                                </td>
                                <td className="even:bg-blue-gray-50/50">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        En Proceso
                                    </Typography>
                                </td>
                                <td className="even:bg-blue-gray-50/50">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        ♫
                                    </Typography>
                                </td>
                                <td className="even:bg-blue-gray-50/50">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        
                                    </Typography>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card> */}
                <Card className="col-span-9 row-span-5 p-5">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70"
                                >
                                {head}
                                </Typography>
                            </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {TABLE_ROWS.map(({ name, job, date }, index) => (
                            <tr key={name} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                {name}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                {job}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                {date}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                Edit
                                </Typography>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </>
    )
}

import React from 'react'

import {
            Typography,
            Card, 
            Input,
            Chip,
            IconButton,
            Menu,
            MenuHandler,
            MenuList,
            MenuItem
        } from '@material-tailwind/react'
import { MagnifyingGlassIcon, ComputerDesktopIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { TopBar } from './TopBar/TopBar'
import { Link } from 'react-router-dom';
import { TitleBard } from './TitleBar/TitleBard';
import { New } from '../New/New';

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
                
                <TitleBard />

                <New col='3' row='6' />

                <Card className="col-span-9 row-span-5 p-5">
                    <table className="w-full min-w-max table-auto text-left border">
                        <thead>
                            <tr>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                    #
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                    Descripción
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                    Importancia
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                    Estado
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                    Dispositivo
                                    </Typography>
                                </th>
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                    Opciones
                                    </Typography>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography color="blue-gray" variant="h6" >1</Typography>
                                </td>
                                <td className="p-4">
                                    <Typography color="blue-gray" variant="h6" >Error en SIDIGE</Typography>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        Al encender el equipo muestra... 
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Chip
                                        variant="outlined"
                                        color="red"
                                        size="sm"
                                        value="Urgente"
                                        className="w-[100px] text-center"
                                    />
                                </td>
                                <td className="p-4">
                                    <Chip
                                        variant="ghost"
                                        color="blue"
                                        size="sm"
                                        value="En proceso"
                                        className='w-[117px] '
                                        icon={
                                        <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-blue-900 content-['']" />
                                        }
                                    />
                                </td>
                                <td className="p-4">
                                    <ComputerDesktopIcon className='w-10 h-10 text-[#263238]' />
                                </td>
                                <td className="p-4 flex justify-center">
                                    <Menu>
                                        <MenuHandler>
                                            <IconButton variant="text">
                                                <EllipsisVerticalIcon className='w-8 h-8' />
                                            </IconButton>
                                        </MenuHandler>
                                        <MenuList>
                                            <Link to='/dashboard/8'>
                                                <MenuItem>Información</MenuItem>
                                            </Link>
                                            <MenuItem>Descargar Informe</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </div>
        </>
    )
}

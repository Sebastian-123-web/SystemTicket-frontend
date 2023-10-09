import React from 'react'
import {
            Typography,
            Card,
            Chip,
            IconButton,
            Menu,
            MenuHandler,
            MenuList,
            MenuItem
        } from '@material-tailwind/react'
import { ComputerDesktopIcon, EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { TopBar } from '../../../components/TopBar/TopBar'
import { Link } from 'react-router-dom';
import { TitleBard } from './TitleBar/TitleBard';
import { New } from '../New/New';

const TABLE_HEAD = ["#", "Descripcion", "Importancia", "Estado", "Dispositivo", " "];
 
const TABLE_ROWS = [
  {
    nticket : 1
  }
];

export const MyTicket = () => {
    return (
        <>
            <TopBar TitleSection={"Mis Tickets"} />

            <div className='h-[calc(100%-124px)] mt-6 grid grid-cols-12 grid-rows-6 gap-6'>
                
                <TitleBard />

                <New col='col-span-3' row='row-span-6' />

                <Card className="col-span-9 row-span-5 p-5">
                    <table className="w-full min-w-max table-auto text-left border">
                        <thead>
                            <tr>
                                {
                                    TABLE_HEAD.map((valor,key)=>(
                                        <th key={key} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <div className={`w-full ${valor == "Descripcion" ? " " : "flex justify-center"}`}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal leading-none opacity-70"
                                                >
                                                {valor}
                                                </Typography>
                                            </div>
                                        </th>
                                    ))
                                }
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
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <div className='flex justify-center'>
                                        <Chip
                                            variant="outlined"
                                            color="red"
                                            size="sm"
                                            value="Urgente"
                                            className="w-[100px] text-center"
                                        />
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className='flex justify-center'>
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
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className='flex justify-center'>
                                        <ComputerDesktopIcon className='w-10 h-10 text-[#263238]' />
                                    </div>
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

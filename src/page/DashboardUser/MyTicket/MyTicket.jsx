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
                    {/* <table className="w-full min-w-max table-auto text-left border">
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
                                            className='w-[117px]'
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
                    </table> */}

                    <div className='flex flex-row items-center h-[50px] text-black bg-[#ecedf1]'>
                        <div className='w-[50px] flex justify-center'>#</div>
                        <div className='w-[50%] text-left pl-5'>Descripcion</div>
                        <div className='w-[50%] flex flex-row justify-between'>
                            <div className='w-[120px] hidden md:flex justify-center'>Importancia</div>
                            <div className='w-[120px] hidden xl:flex justify-center'>Estado</div>
                            <div className='w-[78px] hidden 2xl:flex justify-center'>Dispositivo</div>
                            <div className='w-[50px]'></div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center border-t py-3'>
                        <div className='w-[50px] flex justify-center'>
                            <Typography color="blue-gray" variant="h6" >1</Typography>
                        </div>
                        <div className='w-[50%] pl-5'>
                            <Typography color="blue-gray" variant="h6" >Error en SIDIGE</Typography>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            </Typography>
                        </div>
                        <div className='w-[50%] flex flex-row justify-between items-center'>
                            <div className='w-[120px] h-[26px] hidden md:flex justify-center'>
                                <Chip
                                    variant="outlined"
                                    color="red"
                                    size="sm"
                                    value="Urgente"
                                    className="w-[100px] text-center"
                                />
                            </div>
                            <div className='w-[120px] h-[24px] hidden xl:flex justify-center'>
                                <Chip
                                    variant="ghost"
                                    color="blue"
                                    size="sm"
                                    value="En proceso"
                                    className='w-[117px]'
                                    icon={
                                    <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-blue-900 content-['']" />
                                    }
                                />
                            </div>
                            <div className='w-[78px] hidden 2xl:flex justify-center'>
                                <ComputerDesktopIcon className='w-10 h-10 text-[#263238]' />
                            </div>
                            <div className='w-[50px]'>
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
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

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

                <Card className="col-span-12 xl:col-span-9 row-span-5 p-5">
                    <div className='flex flex-row items-center h-[50px] rounded-t-lg text-black bg-[#ecedf1]'>
                        <div className='w-[50px] flex justify-center'>#</div>
                        <div className='w-[50%] text-left px-5'>Descripcion</div>
                        <div className='w-[calc(50%-50px)] flex flex-row justify-between items-center'>
                            <div className='w-[120px] h-[26px] hidden md:flex justify-center'>Importancia</div>
                            <div className='w-[120px] h-[24px] hidden md:flex justify-center'>Estado</div>
                            <div className='w-[78px] hidden 2xl:flex justify-center'>Dispositivo</div>
                            <div className='w-[50px] flex justify-center'>...</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center border-t py-3'>
                        <div className='w-[50px] flex justify-center'>1</div>
                        <div className='w-[50%] text-left px-5'>
                            <Typography color="blue-gray" variant="h6" >Error en SIDIGE</Typography>
                            <Typography variant="small" color="blue-gray" className="font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur ea nihil repudiandae aperiam sint vel corrupti officia mollitia molestias minus quae consequatur dicta, quo accusantium laudantium tenetur animi impedit!
                            </Typography>
                        </div>
                        <div className='w-[calc(50%-50px)] flex flex-row justify-between items-center'>
                            <div className='w-[120px] h-[26px] hidden md:flex justify-center'>
                                <Chip
                                    variant="outlined"
                                    color="red"
                                    size="sm"
                                    value="Urgente"
                                    className="w-[100px] text-center"
                                />
                            </div>
                            <div className='w-[120px] h-[24px] hidden md:flex justify-center'>
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
                            <div className='w-[50px] flex justify-center'>
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

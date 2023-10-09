
import {    
    Avatar,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
    Card
} from '@material-tailwind/react'
import { MoonIcon, UserIcon, Cog8ToothIcon } from '@heroicons/react/24/solid'

import { dataSection } from "../../data/dataSection"

export const TopBar = ({TitleSection}) => {

    const title = dataSection.find((sect) => sect.name == TitleSection)

    return (
        <>
            <Card className='h-[100px] p-5 flex flex-row items-center justify-between'>
                <div className='flex justify-center flex-row '>
                    <Typography variant='h3' color='blue-gray' className='w-10 mr-2'>
                        { title.icon }
                    </Typography>
                    <Typography variant='h3' className='flex flex-row items-center justify-center' color="blue-gray">
                        { title.name }
                    </Typography>
                </div>
                <Menu>
                    <MenuHandler>
                        <div className='flex flex-row items-center cursor-pointer py-3 px-6 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20'>
                            <Avatar 
                                src='https://avatars.githubusercontent.com/u/69646937?v=4' 
                                alt="avatar"
                                size='sm'
                                className='mr-2'
                            />
                            <Typography>Rodrigo Bañagasta F.</Typography>
                        </div>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem className='flex items-center justify-start'><UserIcon className='w-4 h-4 mr-1' /> Perfil</MenuItem>
                        <MenuItem className='flex items-center justify-start'><Cog8ToothIcon className='w-4 h-4 mr-1' /> Configuración</MenuItem>
                        <MenuItem className='flex items-center justify-start'><MoonIcon className='w-4 h-4 mr-1' /> Modo Oscuro</MenuItem>
                    </MenuList>
                </Menu>
            </Card>
        </>
    )
}

import {    
    Avatar,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
    Card
} from '@material-tailwind/react'
import { TicketIcon, MoonIcon, UserIcon, Cog8ToothIcon } from '@heroicons/react/24/solid'

export const TopBar = () => {
    return (
        <>
            <Card className='h-[100px] p-5 flex flex-row items-center justify-between'>
                <Typography variant='h3' className='flex flex-row' color="blue-gray">
                    <TicketIcon className='w-10 h-10 mr-2' /> 
                    Mis Tickets
                </Typography>
                
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
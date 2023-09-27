
import {    
    Avatar,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
    Card
} from '@material-tailwind/react'
import { TicketIcon } from '@heroicons/react/24/solid'

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
                        <div className='flex flex-row items-center cursor-pointer'>
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
                        <MenuItem>Configuracion</MenuItem>
                        <MenuItem>Perfil</MenuItem>
                    </MenuList>
                </Menu>
            </Card>
        </>
    )
}
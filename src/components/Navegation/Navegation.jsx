import { Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import { TicketIcon, PlusCircleIcon, PowerIcon } from '@heroicons/react/24/solid'

import { useLoginContext } from '../../context/LoginContext'

export const Navegation = () => {

    // CERRAR SESION
    const { logout } = useLoginContext()

    return (
        <>
            <Card className='h-[calc(100vh-50px)] w-[250px] p-7 m-6 bg-[#212121] text-white flex justify-between items-center flex-col '>
                <div>Aqui ira un logo :3</div>

                <List className='text-white'>
                    <ListItem>
                        <ListItemPrefix>
                            <TicketIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Mis Ticket
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <PlusCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Crear Ticket
                    </ListItem>
                </List>

                <List className='text-white'>
                    <ListItem onClick={logout}>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log out
                    </ListItem>
                </List>
            </Card>
        </>
    )
}

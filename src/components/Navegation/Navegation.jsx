import { Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import { TicketIcon, PlusCircleIcon, PowerIcon } from '@heroicons/react/24/solid'

import { useState } from 'react'
import { useLoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'

const navigationMenu = [
    {
        url : "/dashboard",
        name : "Mis Tickets",
        icon : "ticket-outline"
    },
    {
        url : "/dashboard/createticket",
        name : "Crear Ticket",
        icon : "ticket-outline"
    },
    {
        url : "/dashboard/about",
        name : "About dev",
        icon : "code-outline"
    }
]

export const Navegation = () => {

    // ACTIVAR LA OPCION DE MENU SELECCIONADA
    const [activeMenu, setActiveMenu] = useState("/dashboard")

    // CERRAR SESION
    const { logout } = useLoginContext()

    return (
        <>
            <Card className='h-[calc(100vh-50px)] w-[250px] p-7 m-6 bg-[#212121] text-white flex justify-between items-center flex-col '>
                <div>Aqui ira un logo :3</div>

                <List className='text-white'>
                    {
                        navigationMenu.map((nav, i) => (
                            <Link to={nav.url}>
                                <ListItem key={i}>
                                    <ListItemPrefix>
                                        <TicketIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    {nav.name}
                                </ListItem>
                            </Link>
                        ))
                    }
                    {/* <ListItem>
                        <Link to="/dashboard/createticket" className='flex flex-row'>
                            <ListItemPrefix>
                                <PlusCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Crear Ticket
                        </Link>
                    </ListItem> */}
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

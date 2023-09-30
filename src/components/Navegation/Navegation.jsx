import { Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import { TicketIcon, PlusCircleIcon, InformationCircleIcon, PowerIcon } from '@heroicons/react/24/solid'

import { useState } from 'react'
import { useLoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'

const navigationMenu = [
    {
        url : "/dashboard",
        name : "Mis Tickets",
        icon : <TicketIcon className="h-5 w-5" />
    },
    {
        url : "/dashboard/createticket",
        name : "Crear Ticket",
        icon : <PlusCircleIcon className="h-5 w-5" />
    },
    {
        url : "/dashboard/about",
        name : "About dev",
        icon : <InformationCircleIcon className="h-5 w-5" />
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
                            <Link key={i} to={nav.url} onClick={() => setActiveMenu(nav.url)} className={`${activeMenu==nav.url ? 'bg-blue-gray-50 text-[#212121] rounded-lg ' : ''}`}>
                                <ListItem>
                                    <ListItemPrefix>
                                        {nav.icon}
                                    </ListItemPrefix>
                                    {nav.name}
                                </ListItem>
                            </Link>
                        ))
                    }
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

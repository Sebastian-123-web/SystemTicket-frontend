import React from 'react'

import { Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import { TicketIcon, PlusCircleIcon, PowerIcon } from '@heroicons/react/24/solid'

export const DashboardUser = () => {
    return (
        <div className='w-full h-screen bg-[#f3f5f9] flex items-center p-6'>
            <Card className='h-[calc(100vh-50px)] w-[300px] p-7 flex justify-between items-center flex-col '>
                <div>Aqui ira un logo :3</div>

                <List>
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
                    <ListItem>About dev</ListItem>
                </List>

                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log out
                    </ListItem>
                </List>
            </Card>
        </div>
    )
}

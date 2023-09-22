import { useState, useEffect } from 'react'

import { Card, List, ListItem, ListItemPrefix, Spinner } from '@material-tailwind/react'
import { TicketIcon, PlusCircleIcon, PowerIcon } from '@heroicons/react/24/solid'

export const DashboardUser = () => {

    // SPINNER DE CARGA
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 1000)
    }, [])

    return (
        <div className='w-full h-screen bg-[#f3f5f9] flex justify-center items-center'>
            {
                loading ? (
                    <Spinner className="w-12 h-12" />
                ) : (
                    <div className='w-full h-full flex'>
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
                                {/* <ListItem>About dev</ListItem> */}
                            </List>

                            <List className='text-white'>
                                <ListItem>
                                    <ListItemPrefix>
                                        <PowerIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Log out
                                </ListItem>
                            </List>
                        </Card>
                        <div className='w-full py-6 pr-6'>
                            <Card className='h-[100px]'>
                                
                            </Card>
                            <div className='h-[calc(100%-124px)] mt-6 grid grid-cols-12 grid-rows-6 gap-6'>
                                <Card className='col-span-9 row-span-1'></Card>
                                <Card className='col-span-3 row-span-6'></Card>
                                <Card className='col-span-9 row-span-5'></Card>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

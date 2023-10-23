// TERCEROS
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react'
import { PowerIcon } from '@heroicons/react/24/solid'

// FUNCIONES DEL PROYECTO
import { useLoginContext } from '../../context/LoginContext'
import { dataSection } from '../../data/dataSection'

// COMPONENTES DEL PROYECTO


export const Navegation = () => {

    // OBTENGO EL URL ACTUAL DE LA APP
    var URLactual = window.location 

    // ACTIVAR LA OPCION DE MENU SELECCIONADA 
    // COLOCO POR DEFECTO LA URL ACTUAL DE LA APP PARA QUE AL REFRESCAR MARQUE EN LA NAVEGACION EL CORRECTO
    const [activeMenu, setActiveMenu] = useState(URLactual.hash.replace('#',''))

    // CERRAR SESION
    const { logout } = useLoginContext()

    return (
        <>
            <Card className='h-[calc(100vh-50px)] w-[250px] p-7 my-6 ml-6 bg-[#212121] text-white flex justify-between items-center flex-col'>
                <div>Aqui ira un logo :3</div>

                <List className='text-white'>
                    { 
                        dataSection.map((sect, i) => (
                            <Link key={i} to={sect.url} onClick={() => setActiveMenu(sect.url)} className={`${activeMenu==sect.url ? 'bg-blue-gray-50 text-[#212121] rounded-lg ' : ''}`}>
                                <ListItem>
                                    <ListItemPrefix>
                                        <Typography className='w-5'>
                                            {sect.icon}
                                        </Typography>
                                    </ListItemPrefix>
                                    {sect.name}
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

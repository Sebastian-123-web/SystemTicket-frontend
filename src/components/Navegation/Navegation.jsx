// TERCEROS
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, List, ListItem, ListItemPrefix, Typography, button } from '@material-tailwind/react'
import { PowerIcon, ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/solid'

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

    // ABRIR Y CERRAR LA NAVEGACION
    const [leftNav, setLeftNav] = useState(false)
    const viewNav = () => {
        leftNav ? setLeftNav(false) : setLeftNav(true)
    }

    return (
        <>
            <div className={`${leftNav ? "absolute" : "hidden" } w-full h-screen z-[995] bg-black bg-opacity-60 backdrop-blur-sm`} onClick={viewNav}></div>
            <Card 
                className={`h-screen xl:h-[calc(100vh-50px)] w-[250px] rounded-l-none xl:rounded-lg p-7 xl:my-6 xl:ml-6 bg-[#212121] text-white fixed z-[999] ${leftNav ? "left-[0]" : "left-[-250px]"} duration-500 xl:left-0 justify-between items-center flex-col`}
            >
                <div className='mt-10'>
                    Aqui ira un logo :3
                </div>

                <List className='text-white'>
                    { 
                        dataSection.map((sect, i) => (
                            <Link key={i} to={sect.url} onClick={() => {setActiveMenu(sect.url)}} className={`${activeMenu==sect.url ? 'bg-blue-gray-50 text-[#212121] rounded-lg ' : ''}`}>
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

                <List className='text-white mb-16 md:mb-0'>
                    <ListItem onClick={logout}>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log out
                    </ListItem>
                </List>
                <button 
                    className='absolute xl:hidden bottom-44 right-[-31px] rounded-r-full p-2 bg-[#212121]' 
                    onClick={viewNav}
                    >
                        {leftNav ? <ArrowSmallLeftIcon className='w-4' /> : <ArrowSmallRightIcon className='w-4' /> }
                </button>
            </Card>
        </>
    )
}

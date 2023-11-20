import { Link } from "react-router-dom"

import { useState, useEffect } from 'react'

// COMPONENTES DE MATERIAL TAILWIND
import { Spinner } from '@material-tailwind/react'

const Home = () => {

    // SPINNER DE CARGA
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 1000)
    }, [])

    return (
        <div className="flex justify-center items-center w-full h-screen">
            {
                loading ? (
                    <Spinner className="w-12 h-12" />
                ) : (
                    <>
                        <h1>Hola!, este es el Home (*-*)</h1>
                        <Link to={'/login'}>Iniciar Sesion</Link>
                    </>
                )
            }
        </div>
    )
}

export default Home
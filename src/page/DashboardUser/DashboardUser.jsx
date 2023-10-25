import { useState, useEffect } from 'react'

// COMPONENTES DE MATERIAL TAILWIND
import { Spinner } from '@material-tailwind/react'
import { Navegation } from '../../components/Navegation/Navegation'
import { Outlet } from 'react-router-dom'

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
                        <Navegation />
                        <div className='w-full p-6 xl:ml-[274px]'>
                            <Outlet />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

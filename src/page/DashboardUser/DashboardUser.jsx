import { useState, useEffect } from 'react'

// COMPONENTES DE MATERIAL TAILWIND
import { Card, Spinner } from '@material-tailwind/react'
import { Navegation } from '../../components/Navegation/Navegation'

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
                        <div className='w-full py-6 pr-6'>
                            <Card className='h-[100px]'>
                                hola
                            </Card>
                            <div className='h-[calc(100%-124px)] mt-6 grid grid-cols-12 grid-rows-6 gap-6'>
                                <Card className='col-span-9 row-span-1 p-5'>card 1</Card>
                                <Card className='col-span-3 row-span-6 p-5'>Noticias</Card>
                                <Card className='col-span-9 row-span-5 p-5'>card 3</Card>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

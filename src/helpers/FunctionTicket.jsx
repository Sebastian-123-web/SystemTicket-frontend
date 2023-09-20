import { redirect, useNavigate  } from "react-router-dom";

import Swal from 'sweetalert2'


const functionTicket = () => {
    const navigate = useNavigate();
    
    const informacionTicket = () => {
        navigate('/dashboard/ticket-15')
    }
    const descargarInforme = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Informe Descargado',
            showConfirmButton: false,
            timer: 1500
        })
    }
    
    const opciones = [
        {
            'opcion' : 'Informacion',
            'funcion' : informacionTicket
        },
        {
            'opcion' : 'Descargar Informe',
            'funcion' : descargarInforme
        },
    ]

  return {
    opciones
  }
}

export default functionTicket
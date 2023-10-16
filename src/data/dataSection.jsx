import { TicketIcon, PlusCircleIcon, InformationCircleIcon, StarIcon} from '@heroicons/react/24/solid'

export const dataSection = [
    {
        url : "/dashboard",
        name : "Mis Tickets",
        icon : <TicketIcon />
    },
    {
        url : "/dashboard/createticket",
        name : "Crear Ticket",
        icon : <PlusCircleIcon />
    },
    {
        url : "/dashboard/valoracion",
        name : "Valoracion",
        icon : <StarIcon />
    }
]
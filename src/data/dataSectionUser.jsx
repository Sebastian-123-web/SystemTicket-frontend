import { TicketIcon, PlusCircleIcon, StarIcon} from '@heroicons/react/24/solid'

export const dataSectionUser = [
    {
        url : "/dashboardUser",
        name : "Mis Tickets",
        icon : <TicketIcon />
    },
    {
        url : "/dashboardUser/createticket",
        name : "Crear Ticket",
        icon : <PlusCircleIcon />
    },
    {
        url : "/dashboardUser/valoracion",
        name : "Valoracion",
        icon : <StarIcon />
    }
]
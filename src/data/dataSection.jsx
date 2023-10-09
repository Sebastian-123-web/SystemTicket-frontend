import { TicketIcon, PlusCircleIcon, InformationCircleIcon} from '@heroicons/react/24/solid'

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
        url : "/dashboard/about",
        name : "About dev",
        icon : <InformationCircleIcon />
    }
]
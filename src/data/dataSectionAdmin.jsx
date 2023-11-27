import { TicketIcon, ClipboardDocumentListIcon, ChartBarIcon} from '@heroicons/react/24/solid'

export const dataSectionAdmin = [
    {
        url : "/dashboardAdmin",
        name : "Tickets",
        icon : <TicketIcon />
    },
    {
        url : "/dashboardAdmin/inventory",
        name : "Inventario",
        icon : <ClipboardDocumentListIcon />
    },
    {
        url : "/dashboardAdmin/statistics",
        name : "Estadisticas",
        icon : <ChartBarIcon />
    }
]
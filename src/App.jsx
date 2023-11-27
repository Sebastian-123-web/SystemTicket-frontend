import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';

import { useLoginContext, LoginContextProvider } from './context/LoginContext';

import Home from './page/Home/Home';

import { DashboardUser } from "./page/DashboardUser/DashboardUser";
import { CreateTicket } from './page/DashboardUser/CreateTicket/CreateTicket';
import { MyTicket } from "./page/DashboardUser/MyTicket/MyTicket"
import { Login } from './page/Login/Login';
import { About } from './page/DashboardUser/About/About';
import { Ticket } from './page/DashboardUser/Ticket/Ticket';
import { Appreciation } from './page/DashboardUser/Appreciation/Appreciation'

import { DashboardAdmin } from './page/DashboardAdmin/DashboardAdmin'
import { Tickets } from './page/DashboardAdmin/Tickets/Tickets';
import { Inventory } from './page/DashboardAdmin/Inventory/Inventory'
import { Statistics } from './page/DashboardAdmin/Statistics/Statistics'

export default function App() {

    return (
        <LoginContextProvider>
            <HashRouter>
                <Routes>
                    <Route index element={<Home />} />

                    <Route path='/login' element={<RouterLogin> <Login /> </RouterLogin >} />

                    <Route path='/dashboardUser' element={<RouterDashboardUser url="/" > <DashboardUser /> </RouterDashboardUser>} >
                        <Route index element={<MyTicket />} />
                        <Route path='/dashboardUser/createticket' element={<CreateTicket />} />
                        <Route path='/dashboardUser/:id' element={<Ticket />} />
                        <Route path='/dashboardUser/about' element={<About />} />
                        <Route path='/dashboardUser/valoracion' element={<Appreciation />} />
                    </Route>

                    <Route path='/dashboardAdmin' element={<RouterDashboard url="/" > <DashboardAdmin /> </RouterDashboard >} >
                        <Route index element={ <Tickets /> } />
                        <Route path='/dashboardAdmin/inventory' element={ <Inventory /> } />
                        <Route path='/dashboardAdmin/statistics' element={ <Statistics /> } />
                    </Route>

                    <Route path='*' element={<h1>Pagina no encontrada TwT</h1>} />
                </Routes>
            </HashRouter>
        </LoginContextProvider>
    )
}

function RouterLogin({ children }) {
    const { user } = useLoginContext();

    if (!user) {
        return children
    }

    //console.log(user.access.includes('admin'))

    if (user.access === "admin") {
        return <Navigate to="/dashboardAdmin" />
    }

    return <Navigate to="/dashboardUser" />
}



function RouterDashboard({ children, url }) {

    const { user } = useLoginContext();

    if (!user) {
        return <Navigate to={url} />
    }

    if (user.access.includes('admin')) {
        return children
    }
    return <Navigate to="/dashboardUser" />
}



function RouterDashboardUser({ children, url }) {

    const { user } = useLoginContext();

    if (!user) {
        return <Navigate to={url} />
    }

    if (user.access.includes('user')) {
        return children
    }
    return <Navigate to="/dashboardAdmin" />
}
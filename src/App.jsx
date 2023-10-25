import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';

import { useLoginContext, LoginContextProvider } from './context/LoginContext';
import { DashboardUser } from "./page/DashboardUser/DashboardUser";
import { CreateTicket } from './page/DashboardUser/CreateTicket/CreateTicket';
import { MyTicket } from "./page/DashboardUser/MyTicket/MyTicket"
import { Login } from './page/Login/Login';
import { About } from './page/DashboardUser/About/About';
import { Ticket } from './page/DashboardUser/Ticket/Ticket';
import { Appreciation } from './page/DashboardUser/Appreciation/Appreciation'

export default function App() {

  return (
    <LoginContextProvider>
      <HashRouter>
          <Routes>
            <Route index element={ <RouterLogin url="/dashboard" > <Login /> </RouterLogin > } />
            <Route path='/dashboard' element={ <RouterDashboard url="/" > <DashboardUser /> </RouterDashboard > } >
              <Route index element={ <MyTicket /> } />
              <Route path='/dashboard/createticket' element={ <CreateTicket /> } />
              <Route path='/dashboard/:id' element={ <Ticket /> } />
              <Route path='/dashboard/about' element={ <About /> } />
              <Route path='/dashboard/valoracion' element={ <Appreciation /> } />
            </Route>
            <Route path='*' element={ <h1>Pagina no encontrada TwT</h1> } />
          </Routes>
      </HashRouter>
    </LoginContextProvider>
  )
}

function RouterLogin({children, url}) {
  const { user } = useLoginContext();
  if(user){
    return <Navigate to={url} />
  }else{
    return children
  }
}

function RouterDashboard({children, url}) {
  const { user } = useLoginContext();
  if(user){
    return children
  }else{
    return <Navigate to={url} />
  }
}

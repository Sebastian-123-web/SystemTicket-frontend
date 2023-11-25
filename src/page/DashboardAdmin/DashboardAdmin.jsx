import React from 'react'

import { useLoginContext } from '../../context/LoginContext'

export const DashboardAdmin = () => {

  const { logout } = useLoginContext()

  return (
    <div>
      <h1>DashboardAdmin</h1>
      <button onClick={logout}>Log out</button>
    </div>
  )
}

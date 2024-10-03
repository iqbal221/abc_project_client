import React from 'react'
import NavBar from '../Common/NavBar'
import Dashboard from '../components/Dashboard'


function DashboardPage() {
  return (
    <div className='container' >
        <NavBar />
        <Dashboard/>
    </div>
  )
}

export default DashboardPage
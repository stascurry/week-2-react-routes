import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title"> Dashboard</div>
      <Link to="/dashboard/profile/d45d207b-9b98-4258-a9f7-a3d25173af1f"> Go To Profile</Link>
      <Link to="/dashboard/main"> Go To Main</Link>
    </div>      
  )
}

Dashboard.propTypes = {}

export default Dashboard

import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div id="title"> Main</div>
      <Link to="/dashboard/profile/d45d207b-9b98-4258-a9f7-a3d25173af1f"> Go To Profile</Link>
      <Link to="/dashboard"> Go To Root</Link>
    </div>
  )
}

Main.propTypes = {}

export default Main

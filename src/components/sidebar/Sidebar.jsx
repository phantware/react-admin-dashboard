import React from 'react'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Phantware</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <li>Dashboard</li>
          <li>Dashboard</li>
          <li>Dashboard</li>
        </ul>
      </div>
      <div className='bottom'>color options</div>
    </div>
  )
}

export default Sidebar

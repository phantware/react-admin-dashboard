import React from 'react'
import './home.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        Home Container
      </div>
    </div>
  )
}

export default Home

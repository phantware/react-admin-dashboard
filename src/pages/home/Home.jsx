import React, { useEffect, useMemo, useState } from 'react'
import './home.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import axiosInstance from '../../utils/requestMethods'

const Home = () => {
  const [userStats, setUserStats] = useState([])

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Agu',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  )

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axiosInstance.get('/users/stats')
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'Active User': item.total },
          ])
        )
      } catch {}
    }
    getStats()
  }, [MONTHS])

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className='charts'>
          <Featured />
          <Chart
            data={userStats}
            title='User Analytics'
            grid
            dataKey='Active User'
          />
        </div>
        <div className='charts'>
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  )
}

export default Home

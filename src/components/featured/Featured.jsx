import React, { useEffect, useState } from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { axiosInstance } from '../../utils/requestMethods'

const Featured = () => {
  const [income, setIncome] = useState([])
  const [perc, setPerc] = useState(0)

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await axiosInstance.get('orders/income')
        setIncome(res.data)
        setPerc((res.data[1].total * 100) / res.data[0].total - 100)
      } catch {}
    }
    getIncome()
  }, [])

  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={90} text={'90%'} strokeWidth={3} />
        </div>
        <p className='title'>Total Sales made today</p>
        <p className='amount'>${income[1]?.total || 0}</p>
        <p className='desc'>Above is the total sales made today</p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownIcon fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpIcon fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpIcon fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured

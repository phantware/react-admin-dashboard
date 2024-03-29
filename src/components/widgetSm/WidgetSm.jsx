import React from 'react'
import './widgetSm.css'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../../utils/requestMethods'
import { VisibilityOffOutlined } from '@mui/icons-material'

export default function WidgetSm() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axiosInstance.get('users/?new=true')
        setUsers(res.data)
      } catch {}
    }
    getUsers()
  }, [])

  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {users.map((user) => (
          <li className='widgetSmListItem' key={user._id}>
            <img
              src={
                user.img ||
                'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
              }
              alt=''
              className='widgetSmImg'
            />
            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>{user.username}</span>
            </div>
            <button className='widgetSmButton'>
              <VisibilityOffOutlined className='widgetSmIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

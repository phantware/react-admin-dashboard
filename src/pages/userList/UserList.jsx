import React from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid'
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

export default function UserList() {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt='' />
            {params.row.username}
          </div>
        )
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlinedIcon
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        autoHeight
      />
    </div>
  )
}

// import React from 'react'
// import { DataGrid } from '@mui/x-data-grid'
// import Avatar from '@mui/material/Avatar'

// export default function UserList() {
//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     {
//       field: 'user',
//       headerName: 'User',
//       width: 200,
//       renderCell: (params) => {
//         console.log(params)
//         return (
//           <>
//             <Avatar src={params.value.avatar} />
//             {params.value.username}
//           </>
//         )
//       },
//     },
//     { field: 'email', headerName: 'E-mail', width: 130 },
//     {
//       field: 'status',
//       headerName: 'Status',
//       width: 90,
//     },
//     {
//       field: 'transaction',
//       headerName: 'Transaction',
//       width: 100,
//     },
//   ]

//   const rows = [
//     {
//       id: 1,
//       user: {
//         username: 'Harry Potter',
//         avatar:
//           'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png',
//       },
//       email: 'Harry@gmail.com',
//       status: 'Active',
//       transaction: '$120',
//     },
//   ]

//   return (
//     <>
//       <DataGrid
//         autoHeight
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </>
//   )
// }

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<UserList />} />
              <Route path=':userId' element={<User />} />
              <Route path='new' element={<NewUser />} />
            </Route>
            <Route path='products'>
              <Route index element={<ProductList />} />
              {/* <Route path=':productId' element={<Single />} /> */}
              {/* <Route path='new' element={<New />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

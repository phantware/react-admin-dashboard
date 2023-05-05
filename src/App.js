import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import UserList from './pages/userList/UserList'

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
              {/* <Route path=':userId' element={<Single />} /> */}
              {/* <Route path='new' element={<New />} /> */}
            </Route>
            <Route path='products'>
              {/* <Route index element={<List />} /> */}
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

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Blogs from './pages/Blogs'



function App() {
 
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/blogs' element={<Blogs/>} />
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App

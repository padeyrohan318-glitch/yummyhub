import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Menu from './component/Menu'
import Offers from './component/Offers'
import About from './component/About'
import Contact from './component/Contact'
import Login from './component/Login'
import Signup from './component/Signup'
import Myorder from './component/Myorder'
import DetailProduct from './component/DetailProduct';


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/offers' element={<Offers />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/myorder' element={<Myorder />}></Route>
        <Route path='/detail-product/:id' element={<DetailProduct />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

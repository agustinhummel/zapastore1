import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './componets/navBar';
import Footer from './componets/footes';
import Detail from './pages/detail';
import Products from './componets/products';
function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/detail' element={<Detail/>}/>
        <Route exact path='/product' element={<Products/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

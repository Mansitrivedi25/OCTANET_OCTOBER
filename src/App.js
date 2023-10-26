import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Pages/Layout.js'
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Login from './component/Pages/Login';
import Signup from './component/Pages/Signup';
import Service from './component/Pages/Service';
import Products from './component/Pages/Products';






function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path= '/products' element={<Products/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>} />
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;

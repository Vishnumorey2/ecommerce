import Navbar from '../src/components/Navbar/Navbar'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer'
import Product from './pages/Product.jsx'


function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    
    <Route path="/" element={<Shop/>}/>
    <Route path="/men" element={<ShopCategory category = "men" />}/>
    <Route path="/women" element={<ShopCategory category = "women" />}/>
    <Route path="/kids" element={<ShopCategory category = "kids" />}/>
    <Route path='/product' element={<Product/>}>
      <Route path = ":productid" element={<Product/>}/>
      </Route>
      <Route path="/login" element={<LoginSignup />}/>
      <Route path="/cart" element={<Cart />}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  
   </>

  );
}

export default App;

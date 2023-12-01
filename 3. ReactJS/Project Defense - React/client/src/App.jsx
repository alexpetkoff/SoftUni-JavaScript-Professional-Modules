import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ProductCategory from './components/productCategory/ProductCategory';
import Cart from './components/cart/Cart';
import { ProductsProvider } from './contexts/ProductsContext';
import Register from './components/registerLogin/Register';
import Login from './components/registerLogin/Login';

function App() {

  return (
    <BrowserRouter>
      <ProductsProvider>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/iphone" element={<ProductCategory category='iPhone' />} />
            <Route path="/macbook" element={<ProductCategory category='Macbook' />} />
            <Route path="/mac" element={<ProductCategory category='Mac'/>} />
            <Route path="/macStudio" element={<ProductCategory category='Mac Studio' />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </ProductsProvider>
    </BrowserRouter>
  )
}

export default App;
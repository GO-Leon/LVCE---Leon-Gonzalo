import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import DetailPage from './Pages/DetailPage';
import ContactPage from './Pages/ContactPage';
import ProductsPage from './Pages/ProductsPage';
import AboutUsPage from './Pages/AboutUsPage';
import CartPage from './Pages/CartPage';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/:category" element={<HomePage />}/>
          <Route path="/contacto" element={<ContactPage />}/>
          <Route path="/productos" element={<ProductsPage />}/>
          <Route path="/nosotros" element={<AboutUsPage />}/>
          <Route path="/:category/:id" element={<DetailPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
          <Route path="/cart" element={<CartPage />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;

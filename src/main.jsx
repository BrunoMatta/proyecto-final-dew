import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './pages/Home/App.jsx';
import { CartProvider } from './Context/CartContext.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acceder from './pages/Acceder/Acceder.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Registro from './pages/Registro/Registro.jsx';
import { Blogdetalle } from './pages/Blogdetalle/Blogdetalle.jsx';
import Galeria from './pages/Galeria/Galeria.jsx';
import Carrito from './pages/Carrito/Carrito.jsx';
import Nosotros from './pages/Nosotros/Nosotros.jsx';
import Ok from './pages/Ok/Ok.jsx';
import { UserProvider } from './Context/UserProvider.jsx';

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/acceder" element={<Acceder />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetalle/:id" element={<Blogdetalle />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/ok" element={<Ok />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </CartProvider>
);
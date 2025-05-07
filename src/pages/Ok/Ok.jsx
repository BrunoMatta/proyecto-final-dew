import React from 'react';
import Menu from '../../Componentes/Menu';  
import Footer from '../../Componentes/Footer'; 
import { Link } from 'react-router-dom'; 
import '../Home/App.css'; 

const GraciasCompra = () => {
  return (
    <div>
      <Menu />
      <div className="container">
        <h1>¡Gracias por su Compra!</h1>
        <p>Su pedido ha sido procesado con éxito.</p>
        <div className="btn-container">
          <Link to="/galeria">
            <button className="btn">Ir a Galería</button>
          </Link>
          <Link to="/">
            <button className="btn">Volver al Inicio</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GraciasCompra;

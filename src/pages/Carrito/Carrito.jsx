import React from 'react';
import Menu from '../../Componentes/Menu';
import Footer from '../../Componentes/Footer';
import { useCart } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import '../Home/App.css';

const Carrito = () => {
  const { cart, changeQuantity, removeItem } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Menu />
      <div className="cart-container">
        <h1>Tu Carrito de Compras</h1>
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <div className="item-name">{item.name}</div>
                <div className="item-price">S/. {item.price.toFixed(2)}</div>
              </div>
              <div className="quantity-controls">
                <button onClick={() => changeQuantity(index, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => changeQuantity(index, 1)}>+</button>
              </div>
              <button onClick={() => removeItem(index)}>Eliminar</button>
            </div>
          ))
        )}
      </div>

      <div className="cart-total">
        <div className="total-amount">Total: S/. {total.toFixed(2)}</div>

        <Link to="/ok">
            <button onClick={() => console.log('Total a pagar: S/.', total.toFixed(2))}>Proceder al Pago</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Carrito;

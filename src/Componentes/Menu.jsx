import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserProvider';

const Menu = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <div>
        <Link to="/">
          <img className="logo" src="/images/Logo.png" alt="logo" />
        </Link>
      </div>

      <div>
        <nav>
          <ul className="nav_links">
            <li><Link to="/">Home</Link></li>

            <li className="submenu">
              <a href="#">Skincare</a>
              <div className="submenu-content">
                <div className="submenu-column">
                  <h3>Rutina</h3>
                  <ul>
                    <li><a href="galeria.html">Exfoliantes</a></li>
                    <li><a href="galeria.html">Tónicos</a></li>
                    <li><a href="galeria.html">Cremas</a></li>
                    <li><a href="galeria.html">Contornos de ojos</a></li>
                    <li><a href="galeria.html">Bálsamo Labial</a></li>
                  </ul>
                </div>
                <div className="submenu-column">
                  <h3>Protectores Solares</h3>
                  <ul>
                    <li><a href="#">SPF 50+</a></li>
                  </ul>
                </div>
                <div className="submenu-column">
                  <h3>Mascarillas & Parques</h3>
                  <ul>
                    <li><a href="#">M. DE CHARCOAL</a></li>
                    <li><a href="#">M.DE -ALGAS</a></li>
                    <li><a href="#">M. DE TE VERDE</a></li>
                    <li><a href="#">M. DE SEDA DE ARROZ</a></li>
                  </ul>
                </div>
                <div className="submenu-column">
                  <h3>Serums Antióxidantes</h3>
                  <ul>
                    <li><a href="#">Vitamina C</a></li>
                    <li><a href="#">Ácido Hialurónico</a></li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="submenu">
              <a href="#">Maquillaje</a>
              <div className="submenu-content">
                <div className="submenu-column">
                  <h3>Maquillaje</h3>
                  <ul>
                    <li><a href="">Labiales y Tintas</a></li>
                    <li><a href="">Rubor & Polvos</a></li>
                    <li><a href="">Maquillaje de Ojos</a></li>
                    <li><a href="">Uñas y Manos</a></li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="submenu">
              <Link to="/nosotros">Nosotros</Link>
            </li>

            <li className="submenu">
              <a href="#">Accesorios</a>
              <div className="submenu-content">
                <div className="submenu-column">
                  <h3>Accesorios</h3>
                  <ul>
                    <li><a href="">Adhesivos para Cejas y Pestañas</a></li>
                    <li><a href="">Rodillos de Jade para Facial</a></li>
                    <li><a href="">Cepillo de Cerdas para Limpieza de Piel</a></li>
                    <li><a href="">Espejo de mano con Luz Led</a></li>
                    <li><a href="">Bolsas de Porta Cosméticos</a></li>
                    <li><a href="">Espátula de Acero para Exfofiar</a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {user ? <button>{user}</button> : <>         <Link to="/acceder">
          <button>Acceder</button>
        </Link>

        <Link to="/registro">
          <button>Registrarse</button>
        </Link>
        </>}


      </div>
    </header>
  );
};

export default Menu;

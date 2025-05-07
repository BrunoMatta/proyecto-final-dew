import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../Componentes/Menu';
import Footer from '../../Componentes/Footer';
import '../Home/App.css';
import { useCart } from '../../Context/CartContext';

const Galeria = () => {
  const { agregarAlCarrito } = useCart();

  const marcas = [
    { id: 101, name: 'Bella Glow' },
    { id: 102, name: 'Piel de Ángel' },
    { id: 103, name: 'Eclat Natural' },
    { id: 104, name: 'Rostro Radiante' },
    { id: 105, name: 'Color Vivo' },
    { id: 106, name: 'Secreto Botánico' },
  ];

  const productos = [
    { id: 1, name: 'Sérum Facial Hidratante con Ácido Hialurónico', price: 35.50, image: '/images/logito.png', marcaId: 101 },
    { id: 2, name: 'Mascarilla Facial de Arcilla Purificante', price: 18.99, image: '/images/logito.png', marcaId: 103 },
    { id: 3, name: 'Tónico Facial Refrescante con Extracto de Rosas', price: 22.75, image: '/images/logito.png', marcaId: 102 },
    { id: 4, name: 'Crema Contorno de Ojos Anti-Edad', price: 45.20, image: '/images/logito.png', marcaId: 104 },
    { id: 5, name: 'Bálsamo Labial Nutritivo con Manteca de Karité', price: 9.99, image: '/images/logito.png', marcaId: 101 },
    { id: 6, name: 'Exfoliante Facial Suave con Partículas de Jojoba', price: 28.00, image: '/images/logito.png', marcaId: 103 },
    { id: 7, name: 'Agua Micelar Desmaquillante para Piel Sensible', price: 15.60, image: '/images/logito.png', marcaId: 102 },
    { id: 8, name: 'Aceite Facial Rejuvenecedor con Vitamina E', price: 52.90, image: '/images/logito.png', marcaId: 104 },
    { id: 9, name: 'Limpiador Facial en Gel con Aloe Vera', price: 19.50, image: '/images/logito.png', marcaId: 101 },
    { id: 10, name: 'Mascarilla Capilar Reparadora con Argán', price: 25.99, image: '/images/logito.png', marcaId: 106 },
    { id: 11, name: 'Acondicionador Suavizante con Aceite de Coco', price: 21.25, image: '/images/logito.png', marcaId: 106 },
    { id: 12, name: 'Champú Fortificante con Biotina', price: 27.80, image: '/images/logito.png', marcaId: 106 },
    { id: 13, name: 'Crema Hidratante Corporal con Leche de Almendras', price: 31.50, image: '/images/logito.png', marcaId: 102 },
    { id: 14, name: 'Loción Corporal Reafirmante con Colágeno', price: 38.99, image: '/images/logito.png', marcaId: 104 },
    { id: 15, name: 'Gel de Ducha Energizante con Cítricos', price: 14.75, image: '/images/logito.png', marcaId: 101 },
    { id: 16, name: 'Desodorante Natural sin Aluminio', price: 16.20, image: '/images/logito.png', marcaId: 103 },
    { id: 17, name: 'Base de Maquillaje Fluida de Cobertura Media', price: 42.50, image: '/images/logito.png', marcaId: 105 },
    { id: 18, name: 'Corrector de Ojeras de Larga Duración', price: 29.99, image: '/images/logito.png', marcaId: 105 },
    { id: 19, name: 'Polvos Compactos Matificantes', price: 33.75, image: '/images/logito.png', marcaId: 105 },
    { id: 20, name: 'Rubor en Crema de Acabado Natural', price: 26.20, image: '/images/logito.png', marcaId: 105 },
    { id: 21, name: 'Máscara de Pestañas de Volumen Intenso', price: 31.90, image: '/images/logito.png', marcaId: 105 },
    { id: 22, name: 'Delineador de Ojos Líquido de Alta Precisión', price: 24.50, image: '/images/logito.png', marcaId: 105 },
    { id: 23, name: 'Sombra de Ojos Individual de Larga Duración', price: 12.99, image: '/images/logito.png', marcaId: 105 },
    { id: 24, name: 'Pintalabios Cremoso de Color Intenso', price: 28.00, image: '/images/logito.png', marcaId: 105 },
    { id: 25, name: 'Brillo de Labios Hidratante con Ácido Hialurónico', price: 20.60, image: '/images/logito.png', marcaId: 105 },
    { id: 26, name: 'Set de Brochas de Maquillaje Profesional (5 piezas)', price: 55.90, image: '/images/logito.png', marcaId: 104 },
    { id: 27, name: 'Esponja de Maquillaje Blender', price: 8.50, image: '/images/logito.png', marcaId: 104 },
    { id: 28, name: 'Desmaquillante de Ojos Bifásico', price: 17.25, image: '/images/logito.png', marcaId: 102 },
    { id: 29, name: 'Crema de Manos Reparadora con Glicerina', price: 11.99, image: '/images/logito.png', marcaId: 101 },
    { id: 30, name: 'Exfoliante Corporal Revitalizante con Sales Marinas', price: 34.00, image: '/images/logito.png', marcaId: 103 },
    { id: 31, name: 'Aceite Corporal Nutritivo con Almendras Dulces', price: 41.50, image: '/images/logito.png', marcaId: 106 },
    { id: 32, name: 'Protector Solar Facial SPF 50 de Amplio Espectro', price: 39.99, image: '/images/logito.png', marcaId: 102 },
  ];

  const [productosList, setProductosList] = useState(productos);
  const [selectedMarcas, setSelectedMarcas] = useState([]);

  useEffect(() => {
    showProducts();

  }, [selectedMarcas])

  const showProducts = () => {
    if (selectedMarcas.length > 0) {
      const newProductos = productos.filter(p => selectedMarcas.includes(p.marcaId));
      setProductosList(newProductos);
    } else {
      setProductosList(productos);
    }
  }

  const onHandleCheckbox = (id) => {
    if (selectedMarcas.includes(id)) {
      const newSelectedMarcas = selectedMarcas.filter(m => m !== id)
      setSelectedMarcas(newSelectedMarcas);
    } else {
      setSelectedMarcas([...selectedMarcas, id])
    }
  }

  return (
    <div className="background-galeria">
      <Menu />
      <div id="menu-container"></div>
      <div className="contenedor"></div>

      <div className="titulo-galeria">
        <h3>Galería</h3>
      </div>

      <div className="contenedor-galeria">
        <div className="margen-izquierdo">
          <div>
            <h2>Marcas</h2>
            <div className="check">
              {marcas.map((marca) => (<label key={marca.id}>
                <input type="checkbox" onClick={() => onHandleCheckbox(marca.id)} /> {marca.name}
              </label>))}
            </div>
          </div>
        </div>

        <div className="margen-derecho">
          <div className="sub-cabecera">
            <h2>Titulo</h2>
            <p>Los tónicos coreanos son una parte fundamental de la rutina de belleza coreana...</p>
          </div>

          <div className="tarjetas-group">
            {productosList.map((producto) => (
              <div className="producto-tarjeta" key={producto.id}>
                <div className="iconos-sup">
                  <img src={producto.image} alt={producto.name} />
                  <i className='bx bx-shopping-bag'></i>
                </div>

                <div className="imagen-tarjeta">
                  <img src={producto.image} alt={producto.name} />
                </div>

                <div className="detalle-tarjeta">
                  <span className="detalle-nombre">{producto.name}</span>
                  <p>Este es un producto excelente para tu cuidado personal.</p>

                  <div className="star-precio">
                    <div className="stars">
                      {[...Array(4)].map((_, i) => <i className='bx bxs-star' key={i}></i>)}
                      <i className='bx bx-star'></i>
                    </div>

                    <div className="precio">
                      <span className="precio-num">S/. {producto.price}</span>
                      <span className="precio-leido">precio de oferta</span>
                    </div>
                  </div>

                  <div className="boton-comprar">
                    <div className="boton-degradado"></div>
                    <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ir-al-carrito">
        <Link to="/carrito">
          <button>Ir al carrito</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Galeria;

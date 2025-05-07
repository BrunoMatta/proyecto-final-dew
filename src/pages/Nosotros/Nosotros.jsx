import React from 'react';
import Menu from '../../Componentes/Menu'; 
import Footer from '../../Componentes/Footer'; 
import '../Home/App.css'; 

const Nosotros = () => {
  return (
    <div className="background-container">
      <Menu />
      <div className="nosotros-container">
        <div className="nosotros-header">
          <h1>Sobre Nosotros</h1>
        </div>
        <div className="nosotros-content">
          <div className="nosotros-text">
            <p><strong>DIAMOND SKIN</strong> vende cosméticos coreanos para todo el Perú desde el 2024.</p>
            <p>Todos los pedidos son manejados cuidadosamente y enviados de manera segura para que lleguen a su casa rápidamente. Estamos comprometidos a ofrecerle la mejor calidad y productos seguros: cosméticos coreanos, maquillaje, cuidado natural de la piel, cuidado del cabello y ¡la lista continúa!</p>
            <p>Todos nuestros productos coreanos cumplen con las estrictas pautas establecidas por el MFDS (mfds.go.kr). ¡El uso de cosméticos y productos para el cuidado de la piel coreanos es una solución excelente y saludable para todos!</p>
            <p>Nos esforzamos siempre en buscar los mejores productos y dar el mejor servicio al cliente, teniendo como prioridad brindar confianza y los mejores beneficios, enfocado especialmente en dar la mejor experiencia de compra para Latinoamérica.</p>
            <p>Comuníquese con nosotros cuando quiera, estaremos encantados de responder cualquier duda que tenga. ¡Gracias por su apoyo!</p>
            <div className="mission-section">
              <h2>Nuestra Misión</h2>
              <p>Lanzamos <strong>DIAMOND SKIN</strong> para ayudar a las personas a descubrir el cuidado de la piel y la moda coreana, lo cual es conocido como K-Beauty y K-Style en el mercado de belleza y moda internacional, por su alta calidad, ingredientes naturales, diseños únicos y precios competitivos.</p>
            </div>
          </div>
          <div className="nosotros-image">
            <img src="/images/Logo.png" alt="DIAMOND Productos" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Nosotros;

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Menu from '../../Componentes/Menu';
import Footer from '../../Componentes/Footer';

//YUP
const schema = yup.object().shape({
  nombreCompleto: yup.string().required('Nombre completo es requerido').min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: yup.string().email('Email no válido').required('El email es requerido'),
});

function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <div className="background-container">
        <Menu />

        <div className="dscto-blog">
          <div className="texto-dscto">
            <h1>OFERTAS DESDE 20% DE DESCUENTO</h1>
            <p>consulta, terminos y condiciones por el Whatsap</p>
          </div>

          <div className="botones-portadaa">
            <div className="boton-blog">
              <Link to="/blog">
                <button>Visita el Blog</button>
              </Link>
            </div>
            <div className="boton-blog">
              <Link to="/galeria">
                <button>Galería</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="novedades">
        <h3>Novedades</h3>
      </section>

      <section className="contenedor">
        <div className="carousel-container">
          <div className="carousel-track">
            <div className="tarjetitas">
              {['novedad.png', 'novedad1.png', 'novedad2.png', 'novedad3.png', 'novedad4.png', 'novedad5.png'].map((img, index) => (
                <div className="producto-tarjetita" key={index}>
                  <div className="iconos-sup">
                    <i className='bx bx-shopping-bag'></i>
                  </div>
                  <div className="imagen-tarjetita">
                    <img src={`/images/${img}`} alt={`Producto ${index + 1}`} />
                  </div>
                  <div className="detalle-tarjeta">
                    <span className="detalle-nombres">SKINCARE</span>
                    <div className="boton-informacion">
                      <div className="boton-degradado"></div>
                      <button>Información</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contenedor2">
        <div className="imagen2">
          <img src="/images/mujer1.png" alt="señorita" />
        </div>

        <div className="contenedor2-derecho">
          <div className="spam">
            <span>Descubre la mejores rutinas para tu skincare para:</span>
          </div>

          <div className="checking">
            <div>
              <img src="/images/Checklist-Circle.png" alt="check" />
              <p>Qué utilizar?</p>
            </div>
            <div>
              <img src="/images/Checklist-Circle.png" alt="check" />
              <p>Cuando los utilizo?</p>
            </div>
            <div>
              <img src="/images/Checklist-Circle.png" alt="check" />
              <p>Como los debo utilizar?</p>
            </div>
          </div>

          <div className="boton-blog">
            <Link to="/blog">
              <button>Visita el Blog</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="novedades">
        <h3>Más Vendidos</h3>
      </section>

      <section className="contenedor">
        <div className="carousel-container">
          <div className="carousel-track">
            <div className="tarjetitas">
              {['masVendido.png', 'masVendido1.png', 'masVendido2.png', 'masVendido3.png', 'masVendido4.png', 'masVendido5.png'].map((img, index) => (
                <div className="producto-tarjetita" key={index}>
                  <div className="iconos-sup">
                    <i className='bx bx-shopping-bag'></i>
                  </div>
                  <div className="imagen-tarjetita">
                    <img src={`/images/${img}`} alt={`Producto ${index + 1}`} />
                  </div>
                  <div className="detalle-tarjeta">
                    <span className="detalle-nombres">SKINCARE</span>
                    <div className="boton-informacion">
                      <div className="boton-degradado"></div>
                      <button>Información</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contenedor2">
        <div className="imagen2">
          <img src="/images/mujer2.png" alt="señorita2" />
        </div>

        <div className="contenedor2-derecho">
          <div className="spam">
            <p>Recibe notificaciones de descuentos! </p>
            <span>Aprovecha los descuentos y compra hoy!</span>
          </div>

          <div className="formulario">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p>Nombre Completo</p>
                <input
                  type="text"
                  placeholder="Coloca tu nombre completo"
                  {...register('nombreCompleto')}
                />
                {errors.nombreCompleto && <span>{errors.nombreCompleto.message}</span>}
              </div>
              <div>
                <p>Email</p>
                <input
                  type="text"
                  placeholder="Coloca tu email"
                  {...register('email')}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div className="boton-blog">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;

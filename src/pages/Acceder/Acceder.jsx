import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../../Componentes/Menu';
import Footer from '../../Componentes/Footer';
import '../Home/App.css';
import { UserContext } from '../../Context/UserProvider';

//YUP
const schema = yup.object().shape({
  email: yup.string().email('Email no válido').required('El email es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
});

function Acceder() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();

  const { login } = useContext(UserContext);

  const onSubmit = (data) => {
    console.log('Datos del formulario:', data);
    const {email, password} = data
    const result = login(email, password);
    if(result){
      navigate('/');
    } else {
      setError('root', { type: 'manual', message: 'Usuario o contraseña incorrectos' });
    }
  };

  return (
    <div className="background-registro">
      <Menu />

      <div className="content-container">
        <div className="form-container">
          <h1>Acceder</h1>
          <form id="registro-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="formulario">

              <div>
                <p>E-mail</p>
                <input type="email" placeholder="Coloca tu email" {...register('email')} />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
              </div>

              <div>
                <p>Contraseña</p>
                <input type="password" placeholder="Coloca tu contraseña" {...register('password')} />
                {errors.password && <span className="error-message">{errors.password.message}</span>}
              </div>
              {errors.root && <span className="error-message">{errors.root.message}</span>}
            </div>

            <div className="boton-registro">
              <button type="submit">Acceder</button>
            </div>
          </form>
        </div>

        <div className="info-container">
          <h2 className="info-title">Registrarse</h2>
          <p className="info-text">
            Registrarse en este sitio le permite acceder al estado y al historial de sus pedidos. Rellene los campos que aparecen a continuación y le crearemos una cuenta en un abrir y cerrar de ojos. Sólo le pediremos la información necesaria para que el proceso de compra sea rápido y sencillo.
          </p>
          <Link to="/registro">
            <button className="acceder-btn">Registrarse</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Acceder;
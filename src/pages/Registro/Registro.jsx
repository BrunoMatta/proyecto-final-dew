import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Menu from '../../Componentes/Menu';
import Footer from '../../Componentes/Footer';
import '../Home/App.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserProvider';

//YUP
const schema = yup.object().shape({
  nombreCompleto: yup.string().required('El nombre completo es requerido').min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: yup.string().email('Email no válido').required('El email es requerido'),
  direccion: yup.string().required('La dirección es requerida').min(5, 'La dirección debe tener al menos 5 caracteres'),
  numeroCelular: yup.string().matches(/^[0-9]{9}$/, 'El número de celular debe tener 9 dígitos').required('El número de celular es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
  confirmarPassword: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden').required('Confirmar contraseña es requerido'),
});

function Registro() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm({ resolver: yupResolver(schema) });
  
  const navigate = useNavigate();

  const { registerUser } = useContext(UserContext);

  const onSubmit = (data) => {

    console.log('Datos del formulario:', data);

    const result = registerUser(data?.email, data?.password);
    if(result){
      navigate('/acceder');
    } else{
      setError('email', { type: 'manual', message: 'El correo ingresado ya existe' });
    }
  };

  return (
    <div className="background-registro">
      <Menu />

      <div className="content-container">
        <div className="form-container">
          <h1>Registro de Usuario</h1>
          <form id="registro-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="formulario">
              <div>
                <p>Nombre Completo</p>
                <input type="text" placeholder="Coloca tu nombre completo" {...register('nombreCompleto')} />
                {errors.nombreCompleto && <p className="error-message">{errors.nombreCompleto.message}</p>}
              </div>

              <div>
                <p>Email</p>
                <input type="email" placeholder="Coloca tu email" {...register('email')} />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
              </div>

              <div>
                <p>Dirección</p>
                <input type="text" placeholder="Coloca tu dirección" {...register('direccion')} />
                {errors.direccion && <p className="error-message">{errors.direccion.message}</p>}
              </div>

              <div>
                <p>Número de Celular</p>
                <input type="text" placeholder="Coloca tu número de celular" {...register('numeroCelular')} />
                {errors.numeroCelular && <p className="error-message">{errors.numeroCelular.message}</p>}
              </div>

              <div>
                <p>Contraseña</p>
                <input type="password" placeholder="Coloca tu contraseña" {...register('password')} />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
              </div>

              <div>
                <p>Confirmar Contraseña</p>
                <input type="password" placeholder="Confirma tu contraseña" {...register('confirmarPassword')} />
                {errors.confirmarPassword && <p className="error-message">{errors.confirmarPassword.message}</p>}
              </div>
            </div>

            <div className="boton-registro">
              <button type="submit">Registrarse</button>
            </div>
          </form>
        </div>

        <div className="info-container">
          <h2 className="info-title">Registrarse</h2>
          <p className="info-text">
            Registrarse en este sitio le permite acceder al estado y al historial de sus pedidos. Rellene los campos que aparecen a continuación y le crearemos una cuenta en un abrir y cerrar de ojos. Sólo le pediremos la información necesaria para que el proceso de compra sea rápido y sencillo.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Registro;

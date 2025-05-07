import Menu from '../../Componentes/Menu';
import Footer from '../../Componentes/Footer';
import { useParams, Link } from 'react-router-dom';
import { Loading } from '../../Componentes/Loading';
import { useEffect, useState } from 'react';
import { getPostsById } from '../../services/blogServices';

export const Blogdetalle = () => {
  const { id } = useParams();
  const [post, setPost] = useState()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostsById(id).then(data => {
      setPost(data);
      setLoading(false);
    }).catch()
  }, [])


  const {titulo, user, createdAt, img, content} = post ? post : {};
  const fecha = createdAt ? createdAt.slice(0,10) : null;
  const hora = createdAt ? createdAt.slice(11,19) : null;

  return (
    <div className="background-container2">
      <Menu />


      <div className="blog-post-container">

        {loading ? <Loading /> : <>
          <div className="blog-post-header">
            <h1 className="blog-post-title">{titulo}</h1>
            <p className="blog-post-meta">Publicado el {fecha} a las {hora} por {user}</p>
          </div>

          <img src={img} alt={titulo} className="blog-post-image" />

          <div className="blog-post-content">
            <p>
              {content}
            </p>
          </div>
        </>}



        <Link to="/blog" className="boton-medio">Volver al Blog</Link>
      </div>

      <Footer />
    </div>
  );
}

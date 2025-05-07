import Menu from '../../Componentes/Menu';
import Footer from '../../Componentes/Footer';
import { CardBlog } from '../../Componentes/CardBlog';
import { useEffect, useState } from 'react';
import { getPosts } from '../../services/blogServices';
import { Loading } from '../../Componentes/Loading';


const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [nPosts, setNPosts] = useState(9);
  const increment = 3;

  useEffect(() => {
    getPosts().then(data => {
      setPosts(data);
      setLoading(false);
    }).catch()
  }, [])

  const showMore = () => {
    setNPosts((nPrev) => nPrev + increment);
  }


  return (
    <div className="background-container2">
      <Menu />

      <div className="blog-container">


        <div className="blog-header">
          <h1>Blog de DIAMOND SKIN</h1>
        </div>
        {
          loading ? <Loading /> : <>
            <div className="blog-posts">
              {posts.slice(0, nPosts).map(p => (<CardBlog key={p.id} post={p}/>))}
            </div>

            {
              nPosts < posts.length && <div className="cargar-mas">
              <button className="boton-cargar-mas" onClick={showMore}>Cargar más</button>
            </div>
            }


          </>
        }

      </div>

      <Footer />
    </div>
  );
};

export default Blog;
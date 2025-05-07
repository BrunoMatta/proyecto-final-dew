import { Link } from 'react-router-dom';

export const CardBlog = ({post: {id, img, summary, titulo }}) => {
    return (
        <div className="blog-post">
            <img src={img} alt="Imagen del post" className="blog-post-image" />
            <div className="blog-post-content">
                <h2 className="blog-post-title-card">{titulo}</h2>
                <p className="blog-post-excerpt">{summary}</p>
                <Link to={`/blogdetalle/${id}`} className="boton-medio">Leer más</Link>
                
            </div>
        </div>
    )
}

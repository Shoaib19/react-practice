import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../../useFetch";
import './BlogDetails.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const BlogDetails = () => {
  const {id} = useParams();
  const {data: blog, isLoading, err} = useFetch("http://localhost:8000/blogs/" + id)
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + id,{
    method: 'DELETE'
  }).then(() => {
    history.push('/')
  })
  }

  return ( 
    <div className="blog-details">
      {err && <div>{err}</div>}
      {isLoading && <p>Loading...</p>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>written by: { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleDelete}> Delete Blog </button>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;
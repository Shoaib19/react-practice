import './Home.css'
import BlogList from '../blogComponent/BlogList';
import useFetch from "../../useFetch";

const Home = () => {
  const {data: blogs, isLoading, err} = useFetch("http://localhost:8000/blogs")


  

// methods

// template
  return (  
    <div className="home">
      {err && <div>{err}</div>}
      {isLoading && <p>Loading...</p>}
      { blogs && <BlogList blogs={blogs} title= "All Blogs" /> }
    </div>
  );
}
 
export default Home;
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Second Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/new">New Blog Baby</Link>
      </div>
    </nav>
   );
}
 
export default Navbar;
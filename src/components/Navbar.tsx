import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left">
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/store'}>Store</Link>
        </div>
        <div className="right">
          <FiShoppingCart size={28} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const d = 10;
  return (
    <>
      <nav className="navbar">
        <div className="left">
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/store'}>Store</Link>
        </div>
        <div className="right">
          <div className="right-container">
            <FiShoppingCart size={28} />
          </div>
          <span className="countLabel">{d}</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

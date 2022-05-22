import { FaGithub, FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Navbar({ title }) {
  const { amount } = useSelector((store) => store.cart);
  const count = useSelector((state) => state.counter.value);
  console.log(amount, 'amount11');
  console.log(count, 'count');

  return (
    <div>
      <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="flex-none px-2 mx-2">
            <FaGithub className="inline pr-2 text-3xl" />
            <Link to="/" className="text-lg font-bold">
              {title}
            </Link>
          </div>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
            <FaShoppingBasket />
            <h1>{count}</h1>
            <h2 className="px-4">{amount}</h2>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;

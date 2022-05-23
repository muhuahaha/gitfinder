import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavbarTest from '../components/layout/NavbarTest';
import { Counter } from '../features/counter/Counter';
import CartContainer from '../components/cart/CartContainer';
import { calculateTotals, getCartItems } from '../features/cart/cartSlice';
import Modal from '../components/layout/Modal';

function About() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  console.log(isOpen, 'isOpen');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      {isOpen && <Modal />}
      <NavbarTest />
      <Counter />
      <CartContainer />
    </div>
  );
}

export default About;

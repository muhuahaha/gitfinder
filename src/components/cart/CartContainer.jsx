import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { openModal } from '../../features/modal/modalSlice';

function CartContainer() {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
          <h3>{counter}</h3>
        </header>
      </section>
    );
  }

  return (
    <section>
      <header>
        <h2>your bag</h2>
      </header>
      <div className="flex justify-between">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => {
          dispatch(openModal());
        }}
      >
        clear cart
      </button>
      <h4>total ${total.toFixed(2)}</h4>
    </section>
  );
}

export default CartContainer;

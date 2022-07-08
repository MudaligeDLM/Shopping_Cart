import "./CartItem.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.productName} />
      </div>

      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p className="cartitem__price mt-3" style={{ fontWeight: "bold" }}>{item.productName}</p>
      </Link>

      <p className="cartitem__price mt-3" style={{ fontWeight: "bold" }}>Rs.{item.productPrice}</p>

      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>

      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
      <ToastContainer autoClose={2000}/>
    </div>
  );
};

export default CartItem;

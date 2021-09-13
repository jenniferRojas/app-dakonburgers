import { useContext } from "react";
import { CartContext } from "../../App";
import CartItem from "./CartItem";



const ShoppingCart = () => {
  const { cartState, addToCart, delFromCart,clearCart } = useContext(CartContext)
const {cart}=cartState
  return (
    <div>
      
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
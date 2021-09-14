import { useContext } from "react";
import { CartContext } from "../../App";
import CartItem from "./CartItem";



const ShoppingCart = () => {
  const { cartState, addToCart, delFromCart,clearCart } = useContext(CartContext)
const {cart}=cartState
console.log(cart)
let productinfo=""
cart.map(product => productinfo=productinfo+` **Producto=${product.name} precio=${product.Price}`)
  /* cantidad=${quantity} total=${quantity*price} */
let message=""
message=`Hola, quisiera hacer el siguiente pedido:${productinfo} total productos:${cart.length}`
console.log (message)
  return (
    <div>
      
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        <a href={`https://api.whatsapp.com/send?phone=573023168116&text=${message}`}>
          <button>Hacer pedido</button>
           </a>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
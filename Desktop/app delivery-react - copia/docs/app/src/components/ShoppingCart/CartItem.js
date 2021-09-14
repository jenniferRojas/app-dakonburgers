const CartItem = ({ data, delFromCart }) => {
  let { ID, name, Price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        {Price} x {quantity} = {Price * quantity}
      </h5>
      <button onClick={() => delFromCart(ID)}>Eliminar Uno</button>
      <br />
      <button onClick={() => delFromCart(ID, true)}>Eliminar Todos</button>
      <br />
      <br />
    </div>
  );
};

export default CartItem;

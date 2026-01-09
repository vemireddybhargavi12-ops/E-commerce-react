function Cart({ cart, removeFromCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>My Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            background: "#fff",
            padding: "10px",
            borderRadius: "5px"
          }}
        >
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => removeFromCart(index)}>❌ Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;

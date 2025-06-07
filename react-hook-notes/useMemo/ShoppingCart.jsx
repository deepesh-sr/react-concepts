import { useMemo, useState } from "react";

const cartData = [
  { id: 1, item: "Toy", price: 23, quantity: 2 },
  { id: 2, item: "Phone", price: 23000, quantity: 2 },
  { id: 3, item: "Laptop", price: 230000, quantity: 2 },
];

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(cartData);
  const [coupon, setCoupon] = useState("");

  const totalBill = useMemo(() => {
    console.log("Calculating the total value");
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const finalBill = useMemo(() => {
    if (totalBill > 1000 && coupon === "SAVE10%") {
      return totalBill * 0.9;
    }
    return totalBill;
  }, [totalBill, coupon]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 Your Shopping Cart</h1>
      <ul style={styles.itemList}>
        {cartItems.map((item) => (
          <li key={item.id} style={styles.item}>
            <span style={styles.itemName}>{item.item}</span>
            <span style={styles.itemPrice}>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</span>
          </li>
        ))}
      </ul>

      <div style={styles.total}>Total Bill: ₹{totalBill.toFixed(2)}</div>

      <input
        type="text"
        placeholder="Enter Coupon (e.g. SAVE10%)"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        style={styles.input}
      />

      <div style={styles.final}>Final Price after Discount: ₹{finalBill.toFixed(2)}</div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    background: "#f7f9fc",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "'Segoe UI', sans-serif"
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px"
  },
  itemList: {
    listStyle: "none",
    padding: 0,
    marginBottom: "20px"
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ddd"
  },
  itemName: {
    fontWeight: 500
  },
  itemPrice: {
    color: "#555"
  },
  total: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginTop: "10px"
  },
  input: {
    marginTop: "15px",
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px"
  },
  final: {
    marginTop: "15px",
    fontSize: "1.2rem",
    color: "#1976d2",
    fontWeight: "bold"
  }
};


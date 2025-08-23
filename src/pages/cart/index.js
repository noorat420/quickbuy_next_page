import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/CartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="container mt-4">
      <h2>🛒 Cart</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info">No items in cart.</div>
      ) : (
        <>
          <div className="row">
            {cartItems.map((prod) => (
              <div className="col-md-6 mb-3" key={prod.id}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{prod.title}</h5>
                    <p className="card-text">Price: ₹{prod.price}</p>
                    <p className="card-text">Quantity: {prod.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button className="btn btn-danger" onClick={() => dispatch(clearCart())}>
              🧹 Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';
import { Navbar } from '../../components/Navbar';
import { Footer } from './../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, MinusCircle, Trash } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import CartSVG from '../../assets/ico/cart.webp';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId, itemName) => {

    dispatch(removeFromCart(itemId));

    toast.success(`${itemName} removed !`, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };


  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };


  const totalAmount = cartItems.reduce((acc, product) => {
    return acc + product.productPrice * product.quantity;
  }, 0);
  const handleCheckout = () => {
    navigate('/user/checkout')
  }

  return (
    <div className='main'>
      <Navbar />
      {cartItems.length === 0 ? (
        <div className='cart-empty shadow card'>
          {/* <img src={CartSVG} alt="login-img" className='auth-svg' /> */}
          <p>Book Now to make ur memories Unforgettable</p>
        </div>
      ) : (
        <div>
          <div className='cart-title-container'>
            <h1 className='cart-title'>For Booking</h1>
            <button className='cart-checkout-btn shadow' onClick={handleCheckout}>Book Now</button>
          </div>
          <div className='shadow cart-table-container'>
            <table className='cart-data-table'>
              <thead className='cart-data-thead shadow'>
                <tr>
                  <th>
                    Event
                  </th>
                  <th>
                    Event Name
                  </th>
                  <th>
                    Amount
                  </th>
                  <th>
                    No of Days
                  </th>
                  <th>
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product) => (
                  <tr key={product.pid}>
                    <td> <img src={product.productImage} className='mini-product-img' /></td>
                    <td>{product.productName}</td>
                    <td>₹{product.productPrice}</td>
                    <td>
                      <span className='d-flex-r'>
                        <button className='data-btn-mini bg-white shadow' onClick={() => handleDecreaseQuantity(product.pid)}> <MinusCircle /> </button>
                        <h3> {product.quantity}</h3>
                        <button className='data-btn-mini bg-white shadow' onClick={() => handleIncreaseQuantity(product.pid)}> <PlusCircle /> </button>
                      </span>
                    </td>
                    <td>
                      <button className='data-btn-mini bg-white shadow' onClick={() => handleRemoveItem(product.pid, product.productName)}><Trash color="#ff0000" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className='cart-total'>Total: ₹{totalAmount}</p>
        </div>
      )}


      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer />
    </div>
  );
};

export { Cart };

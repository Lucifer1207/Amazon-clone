import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import Subtotal from './Subtotal';

function Payment() {

    const[{basket, user} ]=useStateValue();
    

    
  return (
    <div className='payment'>
      <div className="payment__container">

        <div className="heading">
            <h1>
                Checkout (<Link to="/checkout">{basket?.length}</Link>  items) .
            </h1>
            </div>


        <div className="payment__section">
             <div className="payment__title">
                 <h3>Delivery Address</h3>
             </div>
             <div className="payment__address">
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Delhi Road , Meerut , India </p>
             </div>
        </div>

        <div className="payment__section">
            <div className="payment__title">
                <h3>Review Items And Delivery</h3>
            </div>
            <div className="payment__items">
                {/* all products to buy */}
                {basket.map(item => (
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                ))}
            </div>
        </div>

        <div className="payment__section">
            <div className="payment__title">
                <h3>Payment Methods</h3>
            </div>
            <div className="payment__details">
                
                    <Subtotal/>
            </div>

           
        </div>
        <div className="end">
                THANK YOU FOR SHOPPING WITH US !!!! 
                <Link to="/Amazon-clone"><img className='im' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="" /></Link>
            </div>
      </div>
    </div>
  )
}

export default Payment

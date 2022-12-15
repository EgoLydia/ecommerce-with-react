import React from 'react'
import './Cart.scss'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSelector, useDispatch } from "react-redux"
import { UPLOAD_URL } from '../../index'
import { removeItem, resetCart } from '../../redux/cartReducer';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest'

export default function Cart() {
    const products = useSelector(state => state.cart.products)

    const dispatch = useDispatch()
    const totalPrice = () => {
        let total = 0
        products.forEach((item) => total += item.quantity * item.price)
        return total.toFixed(2)
    }

    const stripePromise = loadStripe('pk_test_51MEsxtFIcmNWrQOrMMQbsWBjlWvMopzGbfUt3MuI72dl9f3VgqIRkcclDRjjO7TAvrrShXmuegL0UDrobUGlUpD800cEOgVui6');
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise
            const response = await makeRequest.post("/orders", {
                products
            });

            await stripe.redirectToCheckout({
                sessionId: response.data.stripeSession.id
            });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {products?.map(item => (
                <div className='item' key={item.id}>
                    <img src={UPLOAD_URL + item.image} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.description?.substring(0, 100)}</p>
                        <div className="price">{item.quantity} * ${item.price}</div>
                    </div>
                    <DeleteOutlineOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <div className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</div>
        </div>
    )
}

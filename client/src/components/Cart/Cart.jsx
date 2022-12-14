import React from 'react'
import './Cart.scss'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSelector } from "react-redux"
import { UPLOAD_URL } from '../../index'


export default function Cart() {
    const products = useSelector(state => state.cart.products)

    const totalPrice = () => {
        let total = 0
        products.forEach((item) => total += item.quantity * item.price)
        return total.toFixed(2)
    }

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
                    <DeleteOutlineOutlinedIcon className='delete' />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <div className="reset">Reset Cart</div>
        </div>
    )
}

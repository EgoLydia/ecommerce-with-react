import React from 'react'
import './Cart.scss'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSelector } from "react-redux"


export default function Cart() {
    const products = useSelector(state => state.cart.products)

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
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <div className="reset">Reset Cart</div>
        </div>
    )
}

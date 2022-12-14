import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import { useParams } from 'react-router-dom';
import useFetch from '../../hook/useFetch'
import { UPLOAD_URL } from '../../index'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

export const Product = () => {
    const id = useParams().id
    const [selectedImage, setSelectedImage] = useState('image')
    const [quantity, setQuantity] = useState(1)

    const { data, loading, error } = useFetch(`/products/${id}?populate=*`)

    const dispatch = useDispatch()

    return (
        <div className='product'>
            {loading ? ("loading") : (<> <div className="left">
                <div className='images'>
                    <img src={UPLOAD_URL + data?.attributes?.image?.data?.attributes?.url} onClick={e => setSelectedImage('image')}></img>
                    <img src={UPLOAD_URL + data?.attributes?.image2?.data?.attributes?.url} onClick={e => setSelectedImage('image2')}></img>
                </div>
                <div className="mainImg">
                    <img src={UPLOAD_URL + data?.attributes?.[selectedImage]?.data?.attributes?.url}></img>
                </div>

            </div>
                <div className="right">
                    <h2>{data?.attributes?.title}</h2>
                    <span className='price'>${data?.attributes?.price}</span>
                    <p>{data?.attributes?.description}</p>
                    <div className="quantity">
                        <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}> - </button>
                        {quantity}
                        <button onClick={() => setQuantity(prev => prev + 1)}> + </button>
                    </div>
                    <button className='add' onClick={() => dispatch(addToCart({
                        id: data.id,
                        title: data.attributes.title,
                        description: data.attributes.description,
                        price: data.attributes.price,
                        image: data.attributes.image.data.attributes.url,
                        quantity
                    }))}>
                        <AddShoppingCartOutlinedIcon /> ADD TO CART
                    </button>

                    <div className="link">
                        <div className="item">
                            <FavoriteBorderOutlinedIcon /> ADD TO WISH LIST
                        </div>
                        <div className="item">
                            <BalanceOutlinedIcon /> ADD TO COMPARE
                        </div>
                    </div>
                    <div className="info">
                        <span>Vendor: Polo</span>
                        <span>Product Type: T-Shirt</span>
                        <span>Tag: T-Shirt, omen, Top</span>
                    </div>
                    <hr />
                    <div className="info">
                        <span>DESCRIPTION
                        </span>
                        <hr />
                        <span>ADDITIONAL INFORMATION
                        </span>
                        <hr />
                        <span>FAQ</span>
                    </div>

                </div></>)}
        </div>
    )
}
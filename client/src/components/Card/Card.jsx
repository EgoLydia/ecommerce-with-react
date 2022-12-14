import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'
import { UPLOAD_URL } from '../../index'

export default function Card({ item }) {
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className="card">
                <div className="img">
                    {item?.attributes.isNew && <span>Black Friday</span>}
                    <img src={UPLOAD_URL + item.attributes?.image?.data?.attributes?.url} className='mainImg' alt="" />
                    <img src={UPLOAD_URL + item.attributes?.image2?.data?.attributes?.url} className='secondImg' alt="" />
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className="prices">
                    <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
                    <h3>${item?.attributes.price}</h3>
                </div>
            </div>
        </Link>
    )
}

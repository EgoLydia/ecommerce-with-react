import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'
export default function Categories() {
    return (
        <div className="categories">

            <div>
                <div className="row">
                    <img src="https://cdn.pixabay.com/photo/2017/02/26/02/37/girl-2099359__340.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496__340.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Women</Link>
                    </button>
                </div>
            </div>
            <div className=" middle">
                <img src="https://cdn.pixabay.com/photo/2016/11/29/06/09/woman-1867720__340.jpg" alt="" />
                <button>
                    <Link className="link" to="/products">New Season</Link>
                </button>
            </div>
            <div>
                <div className="row">
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/15/58/camera-1840054__340.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/2">Men</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096__340.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Accessories</Link>
                    </button>
                </div>


            </div>
        </div>

    )
}

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import React, { useState } from 'react'
import './Slider.scss'

export default function Slider() {
    const images = [
        "https://cdn.pixabay.com/photo/2016/11/23/17/24/woman-1853936_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/06/22/08/38/children-817368_960_720.jpg"
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }

    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={images[0]} alt="" />
                <img src={images[1]} alt="" />
                <img src={images[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

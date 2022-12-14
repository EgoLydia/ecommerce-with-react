import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './Products.scss'
import useFetch from '../../hook/useFetch'

export const Products = () => {
    const categoryId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)

    const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${categoryId}`)

    const [selectedSubsCats, setSelectedSubsCats] = useState([])

    const handleChange = (e) => {
        const value = e.target.value
        const isChecked = e.target.checked

        setSelectedSubsCats(isChecked ? [...selectedSubsCats, value] : selectedSubsCats.filter((item) =>
            item !== value))

    }
    return (
        <div className='products'>
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    {data?.map((item) => (
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>))}

                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by </h2>
                    <div className="inputItem">
                        <input type="radio" id='asc' value="asc" name='price' onChange={(e) => setSort('asc')} />
                        <label htmlFor="asc">Price (Lowest First)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id='desc' value="desc" name='price' onChange={(e) => setSort('desc')} />
                        <label htmlFor="desc">Price (Highest First)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg" alt="" className="catImg" />
                <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} selectedSubsCats={selectedSubsCats} />
            </div>
        </div>
    )
}
import React from 'react'
import './List.css'
import Card from '../Card/Card'
import useFetch from '../../hook/useFetch'

export default function List({ selectedSubsCats, maxPrice, sort, categoryId }) {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id]=${categoryId}
    ${selectedSubsCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice} `)

    return (
        <div className='list'>
            {error ? " something went wrong!"
                : (loading ? 'loading'
                    : data.map(item => (
                        <Card item={item} key={item.id} />
                    )))}
        </div>
    )
}

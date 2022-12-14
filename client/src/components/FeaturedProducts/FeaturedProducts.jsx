import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
import useFetch from '../../hook/useFetch'

export default function FeaturedProducts({ type }) {
    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    return (
        <div className='featured'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta veritatis similique maiores eius asperiores voluptates esse quae, earum ipsam doloribus odit commodi, aliquid culpa possimus eum officia praesentium deleniti ab.
                    Incidunt ullam autem at tempore obcaecati aut ab facilis reiciendis necessitatibus, consectetur error itaque temporibus aliquam perspiciatis tempora labore odit excepturi aliquid
                    commodi iure quibusdam nam adipisci ea. Natus, sequi!</p>
            </div>
            <div className="bottom">
                {error ? " something went wrong!"
                    : (loading ? 'loading'
                        : data.map(item => (
                            <Card item={item} key={item.id} />
                        )))}
            </div>
        </div>
    )
}

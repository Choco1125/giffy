import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

export default function Gif({ id, title, url }) {
    return (
        <Link to={`/gif/${id}`} className='Gif'>
            <h4>{title}</h4>
            <img src={url} alt={title} loading='lazy' />
        </Link>
    )
}

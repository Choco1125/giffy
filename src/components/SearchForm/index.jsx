import React, { useState } from 'react'
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
    const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
    const [rating, setRating] = useState(initialRating)
    const [path, pushLocation] = useLocation()

    const handleSubmit = event => {
        event.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = event => setKeyword(event.target.value)

    const handleChangeRating = event => setRating(event.target.value)

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder='Search a gif here...' value={keyword} onChange={handleChange} />
            <select value={rating} onChange={handleChangeRating}>
                <option disabled>Rating type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
        </form>
    )
}

export default React.memo(SearchForm)
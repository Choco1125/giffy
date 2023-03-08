import React, { useState } from 'react'
import { useLocation } from 'wouter'

function SearchForm() {
    const [keyword, setKeyword] = useState('')

    const [path, pushLocation] = useLocation()

    const handleSubmit = event => {
        event.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder='Search a gif here...' value={keyword} onChange={handleChange} />
        </form>
    )
}

export default React.memo(SearchForm)
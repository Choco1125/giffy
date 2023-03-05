import React, { useState } from 'react'

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        onSubmit({ keyword })
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
import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import useGif from 'hooks/useGif'

export default function Home() {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGif()

    const handleSubmit = event => {
        event.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder='Search a gif here...' value={keyword} onChange={handleChange} />
            </form>
            <h3>Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <TrendingSearches />
        </>
    )
}

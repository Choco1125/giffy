import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import useGif from '../../hooks/useGif'

const POPULARES = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home() {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGif({ keyword: 'Pokemon' })

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

            <h3>Los gifs más populares</h3>
            <ul>
                {
                    POPULARES.map((popularGif) => (
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`}>
                                Gifs de {popularGif}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

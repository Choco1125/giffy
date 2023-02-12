import React from 'react'
import { Link } from 'wouter'

export default function Category({ categories = [] }) {
    return (
        <>
            <h3>Los gifs más populares</h3>
            <ul>
                {
                    categories.map((popularGif) => (
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

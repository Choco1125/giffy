import React from 'react'
import { Link } from 'wouter'

const POPULARES = ["Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home() {
    return (
        <>
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

import React from 'react'
import useGlobalGifs from '../../hooks/useGlobalGifs'
import Gif from './../../components/Gif'

export default function Detail({ params }) {

    const gifs = useGlobalGifs()
    const gif = gifs.find(singleGif => singleGif.id == params.id)

    return <Gif id={gif.id} title={gif.title} url={gif.url} />
}

import React, { useContext } from 'react'
import GifsContext from './../../context/GifContext'
import Gif from './../../components/Gif'

export default function Detail({ params }) {

    const { gifs } = useContext(GifsContext)
    const gif = gifs.find(singleGif => singleGif.id == params.id)

    console.log(gif)

    return <Gif id={gif.id} title={gif.title} url={gif.url} />
}

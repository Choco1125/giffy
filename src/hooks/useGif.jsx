import React, { useEffect, useState, useContext } from 'react'
import getGifts from '../services/getGifts'
import GifContext from './../context/GifContext'


export default function useGif({ keyword } = { keyword: null }) {

    const [loading, setLoading] = useState(false)
    const { gifs, setGifs } = useContext(GifContext)

    useEffect(() => {
        setLoading(true);

        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

        getGifts({ keyword: keywordToUse })
            .then((gifs) => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            });
    }, [keyword, setGifs]);
    return { loading, gifs }
}

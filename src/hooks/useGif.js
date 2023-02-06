import React, { useEffect, useState } from 'react'
import getGifts from '../services/getGifts'

export default function useGif({ keyword } = { keyword: null }) {

    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        setLoading(true);

        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'ramdom'

        getGifts({ keyword: keywordToUse })
            .then((gifs) => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            });
    }, [keyword]);
    return { loading, gifs }
}

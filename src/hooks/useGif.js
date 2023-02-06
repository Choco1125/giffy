import React, { useEffect, useState } from 'react'
import getGifts from '../services/getGifts'

export default function useGif({ keyword }) {

    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        setLoading(true);
        getGifts({ keyword })
            .then((gifs) => {
                setGifs(gifs)
                setLoading(false)
            });
    }, [keyword]);
    return { loading, gifs }
}

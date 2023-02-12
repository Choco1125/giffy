import React, { useEffect, useState, useContext } from 'react'
import getGifts from '../services/getGifts'
import GifContext from './../context/GifContext'

const INITIAL_PAGE = 0

export default function useGif({ keyword } = { keyword: null }) {

    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const { gifs, setGifs } = useContext(GifContext)

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true);


        getGifts({ keyword: keywordToUse })
            .then((gifs) => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            });
    }, [keyword, keywordToUse, setGifs]);

    useEffect(() => {

        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)
        getGifts({ keyword: keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })

    }, [keywordToUse, page])

    return { loading, loadingNextPage, gifs, setPage }
}

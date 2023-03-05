import React, { useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import useGif from 'hooks/useGif'
import SearchForm from 'components/SearchForm'
import { useLocation } from 'wouter'
import useTitle from 'hooks/useSEO'

export default function Home() {

    const { loading, gifs } = useGif()
    const [path, pushLocation] = useLocation()

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <>
            <SearchForm onSubmit={handleSubmit} />
            <h3>Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <TrendingSearches />
        </>
    )
}

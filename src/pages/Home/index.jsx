import React, { useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches'
import useGif from 'hooks/useGif'
import SearchForm from 'components/SearchForm'
import { Helmet } from 'react-helmet'

export default function Home() {

    const { loading, gifs } = useGif()

    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
                <meta name="description" content="Gif searcher" />
            </Helmet>
            <SearchForm />
            <h3>Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <TrendingSearches />
        </>
    )
}

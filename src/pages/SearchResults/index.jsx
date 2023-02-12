import React, { useEffect, useState } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useGif from 'hooks/useGif'
import Spinner from 'components/Spinner'

export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs } = useGif({ keyword })

    return loading ? <Spinner /> : <ListOfGifs gifs={gifs} />

}

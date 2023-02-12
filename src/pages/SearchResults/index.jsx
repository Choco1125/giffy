import React, { useEffect, useState } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useGif from 'hooks/useGif';

export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs } = useGif({ keyword })

    return loading ? <i>Cargando...🌀</i> : <ListOfGifs gifs={gifs} />

}

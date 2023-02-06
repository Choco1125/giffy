import React, { useContext } from 'react'
import GifContext from '../context/GifContext'

export default function useGlobalGifs() {
    return useContext(GifContext).gifs
}

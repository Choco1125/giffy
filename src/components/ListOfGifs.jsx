import React, { useEffect, useState } from 'react'
import getGifts from '../services/getGifts'
import Gif from './gif'

export default function ListOfGifs({ params }) {

    const { keyword } = params;

    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        getGifts({ keyword })
            .then((gifs) => {
                setGifs(gifs)
                setLoading(false)
            });
    }, [keyword]);

    if (loading) return <i>Cargando...🌀</i>

    return <div>
        {
            gifs.map(({ url, title, id }) =>
                <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )
        }
    </div>
}

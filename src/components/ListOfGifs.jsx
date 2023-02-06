import React from 'react'
import Gif from './gif'

export default function ListOfGifs({ gifs }) {

    return <div className='listGif'>
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

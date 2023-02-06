import React, { useEffect, useState } from 'react'
import getGifts from '../services/getGifts'
import Gif from './gif'

export default function ListOfGifs({ gifs }) {

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

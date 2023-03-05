import React from 'react'
import Gif from 'components/Gif'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'components/Spinner'
import { Redirect } from 'wouter'

export default function Detail({ params }) {

    const { gif, isLoading, isError } = useSingleGif({ id: params.id })

    if (isLoading) return <Spinner />
    if (isError) return <Redirect to='/404' />
    if (!gif) return null

    return <Gif id={gif.id} title={gif.title} url={gif.url} />
}

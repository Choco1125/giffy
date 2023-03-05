import React from 'react'
import Gif from 'components/Gif'
import useSingleGif from 'hooks/useSingleGif'
import Spinner from 'components/Spinner'
import { Redirect } from 'wouter'
import useTitle from 'hooks/useSEO'

export default function Detail({ params }) {

    const { gif, isLoading, isError } = useSingleGif({ id: params.id })
    const title = gif ? gif.title : ''

    useTitle({ title, description: `Detail of ${title}` })

    if (isLoading) return <Spinner />
    if (isError) return <Redirect to='/404' />
    if (!gif) return null

    return <Gif id={gif.id} title={gif.title} url={gif.url} />
}

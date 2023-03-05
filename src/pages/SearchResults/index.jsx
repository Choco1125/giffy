import React, { useCallback, useEffect, useRef } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useGif from 'hooks/useGif'
import Spinner from 'components/Spinner'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import useTitle from 'hooks/useSEO'
import { Helmet } from 'react-helmet'

export default function SearchResults({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGif({ keyword })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

    const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''
    // useTitle({ title })

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    useEffect(() => {
        console.log(isNearScreen)
        if (isNearScreen) debounceHandleNextPage()
    }, [isNearScreen])


    return <>
        {loading
            ? <Spinner />
            : <>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={title} />
                </Helmet>
                <ListOfGifs gifs={gifs} />
                <br />
                <div id="visor" ref={externalRef}></div>
            </>
        }
    </>

}

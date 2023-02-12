import React, { useEffect, useState } from 'react'
import Category from '../Category'
import getTrendingTerms from 'services/getTrendingTerms'

function TrendingSearches() {
    const [trends, setTrends] = useState([])


    useEffect(() => {
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category categories={trends} />
}

export default function LazyTrending() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const onChange = (entries) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(document.getElementById('lazyTrending'))
    }, [])

    return <div id="lazyTrending">
        {show ? <TrendingSearches /> : null}
    </div >
}

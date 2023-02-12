import React, { useEffect, useState, useRef } from 'react'
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
    const elementRef = useRef()

    useEffect(() => {
        const onChange = (entries, observer) => {
            const element = entries[0]

            if (element.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(elementRef.current)

        return () => observer.disconnect();
    }, [])

    return <div ref={elementRef}>
        {show ? <TrendingSearches /> : null}
    </div >
}

import React, { useEffect, useState } from 'react'
import Category from 'components/Category'
import getTrendingTerms from 'services/getTrendingTerms'
import useNearScreen from 'hooks/useNearScreen'

function TrendingSearches() {
    const [trends, setTrends] = useState([])


    useEffect(() => {
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category categories={trends} />
}

export default function LazyTrending() {

    const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

    return <div ref={fromRef}>
        {isNearScreen ? <TrendingSearches /> : null}
    </div >
}

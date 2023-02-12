import React, { useEffect, useState } from 'react'
import Category from '../Category'
import getTrendingTerms from 'services/getTrendingTerms'

export default function TrendingSearches() {
    const [trends, setTrends] = useState([])


    useEffect(() => {
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category categories={trends} />
}

import React, { useReducer } from 'react'
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
}

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {

    const reducer = (state, action) => {

        switch (action.type) {

            case ACTIONS.UPDATE_KEYWORD:
                return {
                    ...state,
                    keyword: action.payload,
                }

            case ACTIONS.UPDATE_RATING:
                return {
                    ...state,
                    rating: action.payload,
                }

            default:
                return state
        }

    }

    const [path, pushLocation] = useLocation()

    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
    })

    const { keyword, rating } = state

    const handleSubmit = (event) => {
        event.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = (event) => {
        dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: event.target.value })
    }

    const handleChangeRating = (event) => {
        dispatch({ type: ACTIONS.UPDATE_RATING, payload: event.target.value })

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder='Search a gif here...' value={keyword} onChange={handleChange} />
            <select value={rating} onChange={handleChangeRating}>
                <option disabled>Rating type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
        </form>
    )
}

export default React.memo(SearchForm)
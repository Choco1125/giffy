import React from 'react'
import { useLocation } from 'wouter'
import useForm from './hooks/useForm'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
  const [path, pushLocation] = useLocation()

  const { keyword, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = (event) => {
    updateKeyword(event.target.value)
  }

  const handleChangeRating = (event) => {
    updateRating(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search a gif here..."
        value={keyword}
        onChange={handleChange}
      />
      <select value={rating} onChange={handleChangeRating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  )
}

export default React.memo(SearchForm)

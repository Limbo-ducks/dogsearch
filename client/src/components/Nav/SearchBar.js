import React, { useState } from 'react'

const SearchBar = () => {
    const [ input, setInput ] = useState('')

    const handleChange = event => setInput(event.target.value)

    return (
        <input
            type='text'
            placeholder='Search'
            value={input}
            onChange={handleChange}
        />
    )
}

export default SearchBar

import React, {useState} from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

const Filter = ({search}) => {
    const [state, setState] = useState({});
    const [height, setHeight] = useState({ min: 100, max: 300 })

    const handleSubmit = () => {
        const query = Object.entries(state)
            .filter(([_, val]) => val)
            .map(([ key, val ]) => `${key}=${val}`)
            .join('&')
            .concat(`&height_gte=${height.min}&height_lte=${height.max}`)

        search(query); 
    }

    const handleChange = e => {
        setState({...state, [e.target.name] : e.target.value})
    }

    return (
        <div>
            <label>
                <span>Height:</span>
                <InputRange
                    minValue={100}
                    maxValue={300}
                    onChange={setHeight}
                    value={height}
                />
            </label>
            <label>
                <span>Eye color:</span>
                <select name='eyeColor' onChange={handleChange} defaultValue=''>
                    <option value=''>Select an Option</option>
                    <option value='blue'>Blue</option>
                    <option value='brown'>Brown</option>
                    <option value='green'>Green</option>
                    <option value='black'>Black</option>
                    <option value='grey'>Grey</option>
                    <option value='hazel'>Hazel</option>
                </select>
            </label>
            <label>
                <span>Gender</span>
                <select name='gender' onChange={handleChange} defaultValue=''>
                    <option value=''>Select an Option</option>
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                    <option value='transgender'>Transgender/Non-Binary</option>
                    <option value='twins'>Twins/Multiples</option>
                </select>
            </label>
            <button onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default Filter

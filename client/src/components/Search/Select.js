import React from 'react';

const Select = props => {
    return(
            <label>
                <span>{props.label}:</span>
                <select name={props.name} onChange={props.handleChange} defaultValue=''>
                    <option value=''>Select an Option</option>
                    {props.options.map(option=> <option value={option.value}>{option.text}</option>)}
                </select>
            </label>
    )
}

export default Select;
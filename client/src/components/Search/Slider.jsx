import React from 'react'
import { Slider, Typography } from '@material-ui/core'

const SliderField = ({ min = 0, max = 100, step = 1, value, name, label, onChange }) => (
    <div className={`mx-8 ${name}`}>
        <Typography gutterBottom>
            {label}
        </Typography>
        <Slider
            value={value}
            name={name}
            onChange={onChange}
            min={min}
            max={max}
            step={step}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={x => `${x} in`}
        />
    </div>
)

export default SliderField

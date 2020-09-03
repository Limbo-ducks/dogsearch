import React from 'react'
import { Slider, Typography } from '@material-ui/core'

const SliderField = ({ min = 0, max = 100, value, label, onChange }) => (
    <div className="mx-8">
        <Typography gutterBottom>
            {label}
        </Typography>
        <Slider
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={x => `${x} in`}
        />
    </div>
)

export default SliderField

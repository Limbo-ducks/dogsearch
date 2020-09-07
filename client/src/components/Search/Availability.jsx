import React from 'react'
import { TextField } from '@material-ui/core'

const Availability = ({ onChange }) => (
    <section>
        <h2>Availability</h2>
        <TextField
            type="date"
            label="from"
            onChange={onChange('from')}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            type="date"
            label="to"
            onChange={onChange('to')}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </section>
)

export default Availability

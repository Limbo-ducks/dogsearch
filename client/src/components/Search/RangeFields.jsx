import React from 'react'
import Slider from './Slider'

const RangeFields = ({ ranges, handleRangeChange }) => (
    <>
      <Slider
        label='Height'
        value={ranges['measurements.height']}
        onChange={handleRangeChange('measurements.height')}
        min={40}
        max={120}
      />
      <Slider
        label='Weight'
        value={ranges['measurements.weight']}
        onChange={handleRangeChange('measurements.weight')}
        min={50}
        max={280}
      />
      <Slider
        label='Sleeve Length'
        value={ranges['measurements.sleeveLength']}
        onChange={handleRangeChange('measurements.sleeveLength')}
        min={29}
        max={40}
      />
      <Slider
        label='Neck'
        value={ranges['measurements.neck']}
        onChange={handleRangeChange('measurements.neck')}
        min={12}
        max={25}
        step={0.5}
      />
      <Slider
        label='Jacket Chest'
        value={ranges['measurements.jacketChest']}
        onChange={handleRangeChange('measurements.jacketChest')}
        min={32}
        max={58}
      />
      <Slider
        label='Waist'
        value={ranges['measurements.waist']}
        onChange={handleRangeChange('measurements.waist')}
        min={18}
        max={58}
      />
      <Slider
        label='Inseam'
        value={ranges['measurements.inseam']}
        onChange={handleRangeChange('measurements.inseam')}
        min={25}
        max={40}
      />
      <Slider
        label='Shoe Length'
        value={ranges['measurements.shoeLength']}
        onChange={handleRangeChange('measurements.shoeLength')}
        min={1}
        max={17}
        step={0.5}
      />
    </>
)

export default RangeFields

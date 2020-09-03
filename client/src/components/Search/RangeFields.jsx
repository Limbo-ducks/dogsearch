import React from 'react'
import Slider from './Slider'

const RangeFields = ({ ranges, handleRangeChange }) => (
    <>
      <Slider
        label='Height'
        name='height'
        value={ranges['measurements.height']}
        onChange={handleRangeChange('measurements.height')}
        min={40}
        max={120}
      />
      <Slider
        label='Weight'
        name='weight'
        value={ranges['measurements.weight']}
        onChange={handleRangeChange('measurements.weight')}
        min={50}
        max={280}
      />
      <Slider
        label='Sleeve Length'
        name='sleeveLength'
        value={ranges['measurements.sleeveLength']}
        onChange={handleRangeChange('measurements.sleeveLength')}
        min={29}
        max={40}
      />
      <Slider
        label='Neck'
        name='neck'
        value={ranges['measurements.neck']}
        onChange={handleRangeChange('measurements.neck')}
        min={12}
        max={25}
        step={0.5}
      />
      <Slider
        label='Jacket Chest'
        name='jacketChest'
        value={ranges['measurements.jacketChest']}
        onChange={handleRangeChange('measurements.jacketChest')}
        min={32}
        max={58}
      />
      <Slider
        label='Waist'
        name='waist'
        value={ranges['measurements.waist']}
        onChange={handleRangeChange('measurements.waist')}
        min={18}
        max={58}
      />
      <Slider
        label='Inseam'
        name='inseam'
        value={ranges['measurements.inseam']}
        onChange={handleRangeChange('measurements.inseam')}
        min={25}
        max={40}
      />
      <Slider
        label='Shoe Length'
        name='shoeLength'
        value={ranges['measurements.shoeLength']}
        onChange={handleRangeChange('measurements.shoeLength')}
        min={1}
        max={17}
        step={0.5}
      />
    </>
)

export default RangeFields

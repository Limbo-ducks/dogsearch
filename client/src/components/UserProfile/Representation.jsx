import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import RepresentationCard from './RepresentationCard'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
  },
  border: {
    'border-bottom': '1px solid lightgray',
    padding: 0,
    'box-shadow': 'none'
  },
  content: {
    margin: 0,
  }

}));
const Representation = () => {
  const [count, setCount] = useState(1)
  const classes = useStyles();
  
  return (
    <section className='talent-registration-representation info-container'>
      <Accordion className={classes.border}>
          <AccordionSummary
            className={classes.content}
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Representation</h2>
            
          </AccordionSummary>
          <AccordionDetails className={classes.root}>
            <p>This section is not fully functional and none of the information will be actually added to your profile</p>
            <div>
              {Array.from({ length: count }, (_, i) => <RepresentationCard key={`rep-card-${i}`} />)}
            </div>
            <Button variant='outlined' onClick={() => setCount(count + 1)}>Add More</Button>
          </AccordionDetails>
        </Accordion>
    </section>
  )
}

export default Representation

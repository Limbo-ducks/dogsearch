import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import ActingCredit from './ActingCredit'
import NonActingCredit from './NonActingCredit'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CreditSection = () => {
  const [aCredits, setACredits] = useState(1)
  const [naCredits, setNACredits] = useState(1)

  return (
    <>
      <section className='talent-registration-credits info-container'>
        <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2>Acting Credit</h2>
            </AccordionSummary>
            <AccordionDetails>
              <p>This section is not fully functional and none of the credits will be actually added to your profile</p>
              <div className='talent-subfield'>{Array.from({ length: aCredits }, (_, i) => <ActingCredit key={`acting-credit-${i}`} />)}</div>
              <Button variant='outlined' onClick={() => setACredits(aCredits + 1)}>Add More</Button>
            </AccordionDetails>
          </Accordion> 
      </section>
      <section className='talent-registration-credits info-container'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h2>Non-Acting Credit</h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>This section is not fully functional and none of the credits will be actually added to your profile</p>
            <div className='talent-subfield'>{Array.from({ length: naCredits }, (_, i) => <NonActingCredit key={`acting-credit-${i}`} />)}</div>
            <Button variant='outlined' onClick={() => setNACredits(naCredits + 1)}>Add More</Button>
          </AccordionDetails>
        </Accordion>
      </section>
    </>
  )
}

export default CreditSection

import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import ActingCredit from './ActingCredit'
import NonActingCredit from './NonActingCredit'

const CreditSection = () => {
  const [aCredits, setACredits] = useState(1)
  const [naCredits, setNACredits] = useState(1)

  return (
    <section>
      <h3>Acting Credit</h3>
      <p>This section is not fully functional and none of the credits will be actually added to your profile</p>
      {Array.from({ length: aCredits }, (_, i) => <ActingCredit key={`acting-credit-${i}`} />)}
      <Button onClick={() => setACredits(aCredits + 1)}>Add</Button>
      <h3>Non-Acting Credit</h3>
      <p>This section is not fully functional and none of the credits will be actually added to your profile</p>
      {Array.from({ length: naCredits }, (_, i) => <NonActingCredit key={`acting-credit-${i}`} />)}
      <Button onClick={() => setNACredits(naCredits + 1)}>Add</Button>
    </section>
  )
}

export default CreditSection

import React from 'react'
import EducationCredit from './EducationCredit'

const EducationCredits = ({data}) => {
    return(
        <section>
            <span id="education" className="spanscroll"></span>
            <h3 className="content__title" >Education</h3>
                {data.education.length > 0 ? 
                    data.education.map(elem => <EducationCredit data={elem}/>) : null}
        </section>
    )
}

export default EducationCredits
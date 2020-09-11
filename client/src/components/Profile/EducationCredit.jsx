import React from 'react'

const EducationCredit = ({data}) => {
    return(
    <article className="content__cv__acting content__cv__education">
            <h3><b>School:</b> {data.school}, {data.from}-{data.to}</h3>
            <p><b>Course:</b> {data.course} </p>
    </article>
    )
}

export default EducationCredit
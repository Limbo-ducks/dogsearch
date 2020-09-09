import React from 'react'

const EducationCredit = ({data}) => {
    return(
    <article className="content__cv__acting content__cv__education">
            <h3>School: {data.school}, {data.from}-{data.to}</h3>
            <p>Course: {data.course} </p>
    </article>
    )
}

export default EducationCredit
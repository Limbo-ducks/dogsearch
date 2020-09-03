import React from 'react'
import { capitalise, map, pipe, spaciate } from '../../lib/helpers'

const titlefy = pipe(
    capitalise,
    spaciate
)

const makeListItem = ([ key, val ]) => <li key={key}>
    <span>{titlefy(key)}:&nbsp;</span>
    <span>{val}</span>
</li>

const makeFields = pipe(
    Object.entries,
    map(makeListItem)
)

const InfoSection = ({ data }) => console.log(data) || (
    <section>
        <section>{data.biography}</section>
        <section>{data.resume}</section>
        <section>
            <h2>Contact Information</h2>
            <ul>
                {makeFields(data.contact)}
            </ul>
        </section>
        <section>
            <h2>Representation</h2>
            <div>
                <h3>Agent</h3>
                <span>{data.representation.agent.name}</span>
                <span>({data.representation.agent.phone}, {data.representation.agent.email})</span>
            </div>
            <div>
                <h3>Manager</h3>
                <span>{data.representation.manager.name}</span>
                <span>({data.representation.manager.phone}, {data.representation.manager.email})</span>
            </div>
        </section>
        <section>
            <h2>Appearance</h2>
            <ul>
                {makeFields({
                    gender: data.gender,
                    eyeColor: data.eyeColor,
                    hairColor: data.hairColor,
                    hairLength: data.hairLength,
                    ethnicity: data.ethnicity,
                    bodyModifications: data.bodyModifications,
                    disabilities: data.disabilities
                })}
            </ul>
        </section>
        <section>
            <h2>Measurements</h2>
            <ul>
                {makeFields(data.measurements)}
            </ul>
        </section>
        <section>
            <h2>Skills</h2>
            <ul>
                {makeFields({
                    athleticEndeavors: data.athleticEndeavors,
                    performance: data.performance,
                    accent: data.accent,
                    languages: data.languages.join(', '),
                    additionalSkills: data.additionalSkills
                })}
            </ul>
        </section>
    </section>
)

export default InfoSection

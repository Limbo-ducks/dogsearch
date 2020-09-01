import React from 'react';
import ResultCard from './ResultCard'

 function ResultList(props){
    return (
        <div>
            {props.data.map(profile => {
                return <ResultCard {...profile} key={JSON.stringify(profile)} />
            })}
        </div>
    )
}
export default ResultList;
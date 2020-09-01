import React from 'react';

 function ResultCard(props){
    return (
        <div>
            <img src={props.image} alt='profile-pic'/>
            <p>{props.name}</p>
            <p>{props.height}</p>
            <p>{props.eyeColor}</p>
            <p>{props.gender}</p>
        </div>
    )
}
export default ResultCard
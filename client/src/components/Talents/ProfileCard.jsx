import React from 'react';

const ProfileCard = props => {
    const {data} = props;
    return(
    <div>
        <img src={data.media.headShot} alt='profile-pic' width='100px'/>
        <button>M</button>
        <button>C</button>
        <h3>{data.profession}</h3>
        <h3>{data.cast}</h3>
        <p>{}</p>
        <p>Acting age: 24-30</p>
        <p>Height:{}</p>
    </div>
    )
}

export default ProfileCard
import React from 'react'
import blankProfilePicture from '../../assets/images/blank-profile-picture.png'

const ImageGallery = ({data}) => {

    return(
        <>
                <article className="gallery__column gallery__column--profile">
                    <img src={data[0] ? data[0].url: blankProfilePicture} alt=""/>
                    <img src={data[1] ? data[1].url: blankProfilePicture} alt=""/>   
                </article>

                <article className="gallery__column gallery__column--profile">
                    <img src={data[2] ? data[2].url: blankProfilePicture} alt=""/>
                    <img src={data[3] ? data[3].url: blankProfilePicture} alt=""/>   
                </article>

                <article className="gallery__column gallery__column--profile">
                    <img src={data[4] ? data[4].url: blankProfilePicture} alt=""/>
                    <img src={data[5] ? data[5].url: blankProfilePicture} alt=""/>   
                </article>




          
        </>
    )
}

export default ImageGallery
import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import s from './CardGallery.module.css'
import ph1 from '../../images/card1.png'
import ph2 from '../../images/card2.png'
import ph3 from '../../images/card3.png'


const CardGallery = () => {
    const images = [
        {
            original: "https://placehold.co/550x550",
            thumbnail: "https://placehold.co/92x92",
            originalHeight: '550px',
            originalWidth: '550px',
            thumbnailHeight: '92px',
            thumbnailWidth: '92px',
        },
        {
            original: "https://placehold.co/550x550",
            thumbnail: "https://placehold.co/92x92",
            originalHeight: '550px',
            originalWidth: '550px',
            thumbnailHeight: '92px',
            thumbnailWidth: '92px',
        },
        {
            original: "https://placehold.co/550x550",
            thumbnail: "https://placehold.co/92x92",
            originalHeight: '550px',
            originalWidth: '550px',
            thumbnailHeight: '92px',
            thumbnailWidth: '92px',
        },
    ];
    return (
        <div className={s.wrapper}>
            <ImageGallery items={images} thumbnailPosition={'bottom'} showPlayButton={false} showFullscreenButton={false} showNav={false} />
        </div>
    )
}

export default CardGallery
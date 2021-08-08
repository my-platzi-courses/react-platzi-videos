import React from 'react'
import '../assets/styles/components/CarouselItem.scss'

import PlayIcon from '../assets/static/play-icon.png'
import PlusIcon from '../assets/static/plus-icon.png'

function CarouselItem({ cover, title, year, contentRating, duration }) {
    return (
        <div className='carousel-item'>
            <img className='carousel-item__img' src={cover} alt={title} />
            <div className='carousel-item__details'>
                <div>
                    <img
                        className='carousel-item__details--img'
                        src={PlayIcon}
                        alt='Play Icon'
                    />
                    <img
                        className='carousel-item__details--img'
                        src={PlusIcon}
                        alt='Plus Icon'
                    />
                </div>
                <p className='carousel-item__details--title'>{title}</p>
                <p className='carousel-item__details--subtitle'>
                    {`${year} ${contentRating} ${duration} minutos`}
                </p>
            </div>
        </div>
    )
}

export default CarouselItem

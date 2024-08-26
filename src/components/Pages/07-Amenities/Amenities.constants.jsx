import React from 'react';

import AmenitiesCarousel00 from '../../../assets/img/Amenities-00-Default.jpg'
import AmenitiesCarousel01 from '../../../assets/img/Amenities-01-Concierge.png'
import AmenitiesCarousel02 from '../../../assets/img/Amenities-02-Flexible.png'
import AmenitiesCarousel03 from '../../../assets/img/Amenities-03-Multi-Room.png'
import AmenitiesCarousel04 from '../../../assets/img/Amenities-04-Gym.png'
import AmenitiesCarousel05 from '../../../assets/img/Amenities-05-Shower.png'
import AmenitiesCarousel06 from '../../../assets/img/Amenities-06-Parking.png'
import AmenitiesCarousel07 from '../../../assets/img/Amenities-07-Cafe.png'
import {ReactComponent as AmenitiesIcon01} from '../../../assets/icons/Amenities-Icon-1.svg'
import {ReactComponent as AmenitiesIcon02} from '../../../assets/icons/Amenities-Icon-2.svg'
import {ReactComponent as AmenitiesIcon03} from '../../../assets/icons/Amenities-Icon-3.svg'
import {ReactComponent as AmenitiesIcon04} from '../../../assets/icons/Amenities-Icon-4.svg'
import {ReactComponent as AmenitiesIcon05} from '../../../assets/icons/Amenities-Icon-5.svg'
import {ReactComponent as AmenitiesIcon06} from '../../../assets/icons/Amenities-Icon-6.svg'
import {ReactComponent as AmenitiesIcon07} from '../../../assets/icons/Amenities-Icon-7.svg'


export const AmenitiesItems = () => {
    return (
        [
            {title: "Default", icon: "", src: AmenitiesCarousel00},
            {title: 'Hotel style concierge', icon: AmenitiesIcon01, src: AmenitiesCarousel01},
            {title: 'Flexible space suitable for short term use', icon: AmenitiesIcon02, src: AmenitiesCarousel02},
            {title: 'Bookable multi-purpose space', icon: AmenitiesIcon03, src: AmenitiesCarousel03},
            {title: 'Gym and cardio room', icon: AmenitiesIcon04, src: AmenitiesCarousel04},
            {title: 'Resort style end of trip facilities', icon: AmenitiesIcon05, src: AmenitiesCarousel05},
            {title: 'On site car parking', icon: AmenitiesIcon06, src: AmenitiesCarousel06},
            {title: 'On site cafe', icon: AmenitiesIcon07, src: AmenitiesCarousel07},
        ]
    );
};

export const subheadingText =
    <>
        AMENITIES
    </>

export const headingText =
    <>
        Elite Services<br/>
        and Amenities
    </>
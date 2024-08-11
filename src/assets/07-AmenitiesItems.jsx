import React from 'react';

import AmenitiesCarousel01 from './img/1-concierge.png'
import AmenitiesCarousel02 from './img/2-lobby.png'
import AmenitiesCarousel03 from './img/3-multi_room.png'
import AmenitiesCarousel04 from './img/4-gym.png'
import AmenitiesCarousel05 from './img/5-shower.png'
import AmenitiesCarousel06 from './img/6-parking.png'
import AmenitiesCarousel07 from './img/7-cafe.png'
import {ReactComponent as AmenitiesIcon01} from './svg/7-Amenities-Icon-1.svg'
import {ReactComponent as AmenitiesIcon02} from './svg/7-Amenities-Icon-2.svg'
import {ReactComponent as AmenitiesIcon03} from './svg/7-Amenities-Icon-3.svg'
import {ReactComponent as AmenitiesIcon04} from './svg/7-Amenities-Icon-4.svg'
import {ReactComponent as AmenitiesIcon05} from './svg/7-Amenities-Icon-5.svg'
import {ReactComponent as AmenitiesIcon06} from './svg/7-Amenities-Icon-6.svg'
import {ReactComponent as AmenitiesIcon07} from './svg/7-Amenities-Icon-7.svg'


export const AmenitiesItems = () => {
    return (
        [
            {title: 'Hotel style concierge', icon: AmenitiesIcon01, src: AmenitiesCarousel01},
            {title: 'Flexible space suitable for short term use', icon: AmenitiesIcon02, src: AmenitiesCarousel02},
            {title: 'Bookable multi-purpose space', icon: AmenitiesIcon03, src: AmenitiesCarousel03},
            {title: 'Gym and cardio room', icon: AmenitiesIcon04, src: AmenitiesCarousel04},
            {title: 'Resort style end of trip facilities', icon: AmenitiesIcon05, src: AmenitiesCarousel05},
            {title: 'On site car parking"', icon: AmenitiesIcon06, src: AmenitiesCarousel06},
            {title: 'On site cafe', icon: AmenitiesIcon07, src: AmenitiesCarousel07},
        ]
    );
};

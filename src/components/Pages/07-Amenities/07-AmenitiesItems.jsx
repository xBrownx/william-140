import React from 'react';

import AmenitiesCarousel01 from '../../../assets/img/1-concierge.png'
import AmenitiesCarousel02 from '../../../assets/img/2-lobby.png'
import AmenitiesCarousel03 from '../../../assets/img/3-multi_room.png'
import AmenitiesCarousel04 from '../../../assets/img/4-gym.png'
import AmenitiesCarousel05 from '../../../assets/img/5-shower.png'
import AmenitiesCarousel06 from '../../../assets/img/6-parking.png'
import AmenitiesCarousel07 from '../../../assets/img/7-cafe.png'
import {ReactComponent as AmenitiesIcon01} from '../../../assets/svg/7-Amenities-Icon-1.svg'
import {ReactComponent as AmenitiesIcon02} from '../../../assets/svg/7-Amenities-Icon-2.svg'
import {ReactComponent as AmenitiesIcon03} from '../../../assets/svg/7-Amenities-Icon-3.svg'
import {ReactComponent as AmenitiesIcon04} from '../../../assets/svg/7-Amenities-Icon-4.svg'
import {ReactComponent as AmenitiesIcon05} from '../../../assets/svg/7-Amenities-Icon-5.svg'
import {ReactComponent as AmenitiesIcon06} from '../../../assets/svg/7-Amenities-Icon-6.svg'
import {ReactComponent as AmenitiesIcon07} from '../../../assets/svg/7-Amenities-Icon-7.svg'


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

import React from 'react';
import {ReactComponent as DesignCarousel01} from '../../../assets/svg/Design-1.svg'
import {ReactComponent as DesignCarousel02} from '../../../assets/svg/Design-2.svg'
import {ReactComponent as DesignCarousel03} from '../../../assets/svg/Design-3.svg'
import {ReactComponent as DesignCarousel04} from '../../../assets/svg/Design-4.svg'
import {ReactComponent as DesignCarousel05} from '../../../assets/svg/Design-5.svg'
import {ReactComponent as DesignCarousel06} from '../../../assets/svg/Design-6.svg'

export const DesignItems = () => {
    return (
         [
    {title: 'GROUND LEVEL OVERVIEW', src: DesignCarousel01},
    {title: 'CAFE SERVERY', src: DesignCarousel02},
    {title: 'CAFE LOUNGE', src: DesignCarousel03},
    {title: 'COURTYARD', src: DesignCarousel04},
    {title: 'MAIN RECEPTION', src: DesignCarousel05},
    {title: 'LOBBY LOUNGE', src: DesignCarousel06},
]
    );
};
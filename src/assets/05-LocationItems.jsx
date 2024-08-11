import React from 'react';
import {ReactComponent as LocationCar01} from './svg/Location-1.svg'
import {ReactComponent as LocationCar02} from './svg/Location-2.svg'
import {ReactComponent as LocationCar03} from './svg/Location-3.svg'
import {ReactComponent as LocationCar04} from './svg/Location-4.svg'
import {ReactComponent as LocationIcon01} from './icons/1-FB.svg'
import {ReactComponent as LocationIcon02} from './icons/2-Retail.svg'
import {ReactComponent as LocationIcon03} from './icons/3-Trains.svg'
import {ReactComponent as LocationIcon04} from './icons/4-Hotels.svg'
import {ReactComponent as LocationIcon05} from './icons/5-Trams.svg'
import {ReactComponent as LocationIcon06} from './icons/6-Access.svg'

export const LocationItems = () => {
    return (
        [
            {title: 'F&B', icon: LocationIcon01, src: LocationCar01},
            {title: 'RETAIL', icon: LocationIcon02, src: LocationCar02},
            {title: 'TRAINS', icon: LocationIcon03, src: LocationCar03},
            {title: 'HOTELS', icon: LocationIcon04, src: LocationCar04},
            {title: 'TRAMS', icon: LocationIcon05, src: LocationCar01},
            {title: 'ACCESS', icon: LocationIcon06, src: LocationCar01},
        ]
    );
};

import React from 'react';
import {ReactComponent as LocationCar01} from '../../../assets/svg/Location-1.svg'
import {ReactComponent as LocationCar02} from '../../../assets/svg/Location-2.svg'
import {ReactComponent as LocationCar03} from '../../../assets/svg/Location-3.svg'
import {ReactComponent as LocationCar04} from '../../../assets/svg/Location-4.svg'
import {ReactComponent as LocationIcon01} from '../../../assets/icons/1-FB.svg'
import {ReactComponent as LocationIcon02} from '../../../assets/icons/2-Retail.svg'
import {ReactComponent as LocationIcon03} from '../../../assets/icons/3-Trains.svg'
import {ReactComponent as LocationIcon04} from '../../../assets/icons/4-Hotels.svg'
import {ReactComponent as LocationIcon05} from '../../../assets/icons/5-Trams.svg'
import {ReactComponent as LocationIcon06} from '../../../assets/icons/6-Access.svg'

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

import React from 'react';
import LocationCar01 from '../../../assets/svg/Location-Carousel-1.svg'
import LocationCar02 from '../../../assets/svg/Location-Carousel-3.svg'
import LocationCar03 from '../../../assets/svg/Location-Carousel-2.svg'
import LocationCar04 from '../../../assets/svg/Location-Carousel-4.svg'
import {ReactComponent as LocationIcon01} from '../../../assets/icons/Location-01-FB.svg'
import {ReactComponent as LocationIcon02} from '../../../assets/icons/Location-02-Retail.svg'
import {ReactComponent as LocationIcon03} from '../../../assets/icons/Location-03-Trains.svg'
import {ReactComponent as LocationIcon04} from '../../../assets/icons/Location-04-Hotels.svg'
import {ReactComponent as LocationIcon05} from '../../../assets/icons/Location-05-Trams.svg'
import {ReactComponent as LocationIcon06} from '../../../assets/icons/Location-06-Access.svg'

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

export const subHeadingText =
    <>
        LOCATION
    </>

export const headingText =
    <>
        Located in the heart
        of the city
    </>

export const paragraphText =
    <>
        Ideally located in the heart of Melbourne CBD,
        enjoying a prime position on the corner of Bourke
        Street and William Street.
    </>

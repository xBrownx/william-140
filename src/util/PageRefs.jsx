import React, {useRef} from 'react';

export const PageRefs = () => {
    return({
        mainRef: useRef(),
        landingRef: useRef(),
        homeRef: useRef(),
        videoRef: useRef(),
        lifestyleRef: useRef(),
        carouselRef: useRef(),
        designRef: useRef(),
        amenitiesRef: useRef(),
        historyRef: useRef(),
        availabilitiesRef: useRef(),
        agencyRef: useRef(),
        enquiryRef: useRef()
    })
};

export const ScrollConst = {
    homeHead: [0.000, 0.0907, 0.091, 0.150],
    homeBody: [0.050, 0.0907, 0.097, 0.200],

    lifeStyleHead: [
        [0.189, 0.261, 0.293, 0.350],
        [0.194, 0.261, 0.293, 0.360],
        [0.200, 0.261, 0.293, 0.370],
        [0.205, 0.261, 0.293, 0.370],
        [0.205, 0.261, 0.293, 0.370]
    ],

    lifestyleSubHead: [0.220, 0.283, 0.303, 0.410],
    lifestyleBody: [0.220, 0.3, 0.340, 0.410],

    designHead: [
        [0.368, 0.448, 0.448, 0.528],
        [0.368, 0.448, 0.453, 0.528],
        [0.368, 0.448, 0.458, 0.528],
        [0.368, 0.448, 0.463, 0.528],
        [0.368, 0.448, 0.468, 0.528]
    ],

    amenitiesHead: [
        [0.499, 0.572, 0.575, 0.7],
        [0.504, 0.572, 0.58, 0.7],
        [0.509, 0.572, 0.585, 0.7],
        [0.509, 0.572, 0.585, 0.7],
    ],

    historyHead: [
        [0.617, 0.697, 0.697, 0.797],
        [0.617, 0.697, 0.697, 0.797],
        [0.617, 0.697, 0.697, 0.797],
        [0.617, 0.697, 0.697, 0.797],
    ],

    availabilityHead: [0.750, 0.828, 0.835, 0.900],

    agencyHead: [0.840, 0.910, 0.910, 0.980],

    enquiryHead: [0.929, 0.999, 1, 1],

}



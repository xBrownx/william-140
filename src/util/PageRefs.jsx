import React, {useRef} from 'react';
import {useScroll, useTransform} from "framer-motion";

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

export const primaryTitleHeadScroll = (pageStart) => {
    return [
        [pageStart-0.083, pageStart, pageStart+0.008, pageStart+0.089],
        [pageStart-0.079, pageStart, pageStart+0.008, pageStart+0.089],
        [pageStart-0.074, pageStart, pageStart+0.008, pageStart+0.089],
        [pageStart-0.059, pageStart, pageStart+0.008, pageStart+0.089],
        [pageStart-0.010, pageStart+0.010, pageStart+0.035, pageStart+0.089],
    ];
}

export const primaryTitleVariantHeadScroll = (pageStart) => {
    return [
        [pageStart-0.083, pageStart, pageStart+0.008, pageStart+0.089],
        [pageStart-0.083, pageStart, pageStart+0.008, pageStart+0.089],
        [pageStart-0.083, pageStart, pageStart+0.008, pageStart+0.089],
        [pageStart-0.083, pageStart, pageStart+0.008, pageStart+0.089],
        [pageStart-0.083, pageStart, pageStart+0.008, pageStart+0.089]
    ];
}

export const useImgScale = (mainRef, pageStart) => {

    const scrolls = [pageStart-0.083, pageStart, pageStart+0.008, pageStart+0.089]

    const { scrollYProgress} =  useScroll({
        target: mainRef,
    });

    return useTransform(
        scrollYProgress,
        scrolls,
        [0.7, 1, 1, 0.7]
    )
}

export const ScrollConst = {
    homeHead: [0.000, 0.0907, 0.091, 0.150],
    homeBody: [0.050, 0.0907, 0.097, 0.200],


    lifestyleSubHead: [0.220, 0.283, 0.303, 0.410],
    lifestyleBody: [0.220, 0.3, 0.340, 0.410],

    // designHead: ,

    // designHead: [
    //     [0.368, 0.448, 0.448, 0.528],
    //     [0.368, 0.448, 0.453, 0.528],
    //     [0.368, 0.448, 0.458, 0.528],
    //     [0.368, 0.448, 0.463, 0.528],
    //     [0.368, 0.448, 0.468, 0.528]
    // ],

    amenitiesHead: primaryTitleHeadScroll(0.582),
    // [
    //     [0.499, 0.572, 0.575, 0.7],
    //     [0.504, 0.572, 0.58, 0.7],
    //     [0.509, 0.572, 0.585, 0.7],
    //     [0.509, 0.572, 0.585, 0.7],
    // ],

    historyHead: primaryTitleVariantHeadScroll(0.704),
    // [
    //     [0.617, 0.697, 0.697, 0.797],
    //     [0.617, 0.697, 0.697, 0.797],
    //     [0.617, 0.697, 0.697, 0.797],
    //     [0.617, 0.697, 0.697, 0.797],
    // ],

    availabilityHead: primaryTitleVariantHeadScroll(0.822),
        // [0.750, 0.822, 0.835, 0.900],

    agencyHead: [0.840, 0.910, 0.910, 0.980],

    enquiryHead: [0.929, 1, 1.5, 1.5],

}



import React, {useRef} from 'react';

const PageRefs = () => {
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

export default PageRefs

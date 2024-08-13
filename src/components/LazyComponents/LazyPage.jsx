import React, {Suspense, useEffect, useRef, useState} from 'react';
import useFirstViewportEntry from "../../hooks/useFirstViewportEntry";

import {LoadingSection} from "../Core/SectionContainer.styled";
import {useMotionValueEvent, useScroll} from "framer-motion";
import styled from "styled-components";

const LazyPage = (
    {
        id,
        children,
        threshold = 0,
        root = null,
        rootMargin = "0px 0px 0px 0px",
        minHeight,
        justify,
        ...wrapperDivProps
    }
) => {

    const ref = useRef();
    const entered = useFirstViewportEntry(ref, {threshold, root, rootMargin});

    useEffect(() => {
        console.log(`hasEntered == ${entered}`);
    }, [entered])

    return (
        <LazySection
            id="lazy-section"
            {...wrapperDivProps}
            ref={ref}
            minHeight={minHeight}
            justify={justify}
        >
            {entered &&
                <Suspense
                    fallback={<LoadingSection/>}
                >
                    {children}
                </Suspense>}
        </LazySection>
    );
};


const LazySection = styled.div`
    position: relative;
    display: flex;
    min-height: ${props => props.minHeight};
    align-items: ${props => props.justify};
    
    @media only screen and (max-width: 750px) {
        min-height: 100%;
    }
`

export default LazyPage;
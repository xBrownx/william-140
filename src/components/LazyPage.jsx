import React, {Suspense, useEffect, useRef, useState} from 'react';
import useFirstViewportEntry from "../hooks/useFirstViewportEntry";

import {LoadingSection} from "./styles/SectionContainer.styled";
import {useMotionValueEvent, useScroll} from "framer-motion";

const LazyPage = (
    {
        id,
        children,
        threshold = 0,
        root = null,
        rootMargin = "0px 0px 0px 0px",
        ...wrapperDivProps
    }
) => {

    const ref = useRef();
    const entered = useFirstViewportEntry(ref, {threshold, root, rootMargin});

    useEffect(() => {
        console.log(`hasEntered == ${entered}`);
    }, [entered])

    return (
        <section {...wrapperDivProps} ref={ref}>
            {entered &&
                <Suspense
                    fallback={<LoadingSection/>}
                >
                    {children}
                </Suspense>}
        </section>
    );
};

export default LazyPage;
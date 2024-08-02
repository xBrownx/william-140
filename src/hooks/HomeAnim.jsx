import React from 'react'
import {useMotionValueEvent, useScroll, useTransform} from "framer-motion";

export function useHomeAnim(mainRef, headScroll, bodyScroll, offsetVal = 200) {

    const headScaleRange = [0.8, 1, 1, 0.8];
    const bodyScaleRange = [0.6, 1, 1, 0.6];
    const fadeRange = [0, 1, 1, 0];
    const offsetRange = [-offsetVal + "px", "0px", "0px", -offsetVal + "px"]


    const { scrollYProgress} =  useScroll({
        target: mainRef,
    });

    useMotionValueEvent(scrollYProgress, "change",
    (latest) => {
        console.log(`Posy == ${latest}`);
    })

    const headScale = useTransform(
        scrollYProgress,
        headScroll,
        headScaleRange
    );

    const headFade = useTransform(
        scrollYProgress,
        headScroll,
        fadeRange
    )

    const headOffset = useTransform(
        scrollYProgress,
        headScroll,
        offsetRange
    );

    const bodyScale = useTransform(
        scrollYProgress,
        bodyScroll,
        bodyScaleRange
    )

    const bodyFade = useTransform(
        scrollYProgress,
        bodyScroll,
        fadeRange
    )

    const bodyOffset = useTransform(
        scrollYProgress,
        bodyScroll,
        offsetRange
    )

    return {
        headScale: headScale,
        headFade: headFade,
        headOffset: headOffset,
        bodyScale: bodyScale,
        bodyFade: bodyFade,
        bodyOffset: bodyOffset,
    };
}






import {useScroll, useTransform} from "framer-motion";

export function useOffsetAnim(mainRef, scrollVals, offsetVal) {

    const offsetRange = [-offsetVal + "px", "0px", "0px", offsetVal + "px"]

    const { scrollYProgress} =  useScroll({
        target: mainRef,
    });

    return useTransform(scrollYProgress, scrollVals, offsetRange);

}

export function useHeadingAnim(mainRef, scrollVals, offsets) {

    const subHeadOneOffset = [offsets[0] + "px", "0px", "0px", -offsets[0] + "px"]
    const headOneOffset = [-offsets[1] + "px", "0px", "0px", offsets[1] + "px"]
    const headTwoOffset = [offsets[2] + "px", "0px", "0px", -offsets[2] + "px"]
    const subHeadTwoOffset = [-offsets[3] + "px", "0px", "0px", offsets[3] + "px"]
    const fadeRange = [0, 1, 1, 0];
    const bodyScale = [0.7, 1, 1, 0.7]

    const { scrollYProgress} =  useScroll({
        target: mainRef,
    });

    return {
        subHeadOneOffset: useTransform(scrollYProgress, scrollVals[0], subHeadOneOffset),
        headOneOffset: useTransform(scrollYProgress, scrollVals[1], headOneOffset),
        headTwoOffset: useTransform(scrollYProgress, scrollVals[2], headTwoOffset),
        subHeadTwoOffset: useTransform(scrollYProgress, scrollVals[3], subHeadTwoOffset),
        subHeadOneFade:   useTransform(scrollYProgress, scrollVals[0], fadeRange),
        headOneFade:   useTransform(scrollYProgress, scrollVals[1], fadeRange),
        headTwoFade:   useTransform(scrollYProgress, scrollVals[2], fadeRange),
        subHeadTwoFade:   useTransform(scrollYProgress, scrollVals[3], fadeRange),
        bodyScale: useTransform(scrollYProgress, scrollVals[3], bodyScale),
        bodyFade: useTransform(scrollYProgress, scrollVals[3], fadeRange),
    };
}
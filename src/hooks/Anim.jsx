import {useScroll, useTransform} from "framer-motion";

export function useOffsetAnim(mainRef, scrollVals, offsetVal) {

    const offsetRange = [-offsetVal + "px", "0px", "0px", offsetVal + "px"]

    const { scrollYProgress} =  useScroll({
        target: mainRef,
    });

    return useTransform(scrollYProgress, scrollVals, offsetRange);

}

export function useHeadingAnim(mainRef, scrollVals, offsets) {

    const subHeadOffset = [offsets[0] + "px", "0px", "0px", -offsets[0] + "px"]
    const headOneOffset = [-offsets[1] + "px", "0px", "0px", offsets[1] + "px"]
    const headTwoOffset = [offsets[2] + "px", "0px", "0px", -offsets[2] + "px"]
    const fadeRange = [0, 1, 1, 0];


    const { scrollYProgress} =  useScroll({
        target: mainRef,
    });

    return {
        subHeadOffset: useTransform(scrollYProgress, scrollVals[0], subHeadOffset),
        headOneOffset: useTransform(scrollYProgress, scrollVals[1], headOneOffset),
        headTwoOffset: useTransform(scrollYProgress, scrollVals[2], headTwoOffset),
        subHeadFade:   useTransform(scrollYProgress, scrollVals[0], fadeRange),
        headOneFade:   useTransform(scrollYProgress, scrollVals[1], fadeRange),
        headTwoFade:   useTransform(scrollYProgress, scrollVals[2], fadeRange),
    };
}
import {useScroll, useTransform} from "framer-motion";

export function useOffsetAnim(mainRef, scrollVals, offsetVal) {

    const offsetRange = [-offsetVal + "px", "0px", "0px", offsetVal + "px"]

    const { scrollYProgress} =  useScroll({
        target: mainRef,
    });

    return useTransform(scrollYProgress, scrollVals, offsetRange);

}
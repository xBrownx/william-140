import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import React, {useRef} from "react";
import styled from "styled-components";


export const ParallaxImg = ({src, alt}) => {

    const targetRef = useRef();
    const {scrollYProgress, scrollY} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(
        scrollYProgress,
        [0, 0.25, 0.75, 1],
        ["-50%", "-25%", "25%", "50%"]
    );

    useMotionValueEvent(
        scrollYProgress,
        "change",
            latest => console.log(latest)
    )

    return (
        <ImgContainer
            ref={targetRef}
            id={"parallax-img-container"}
        >
            <StyledImg
                loading={"lazy"}
                as={motion.img}
                style={{y: y1}}
                src={src}
                alt={alt}
            />
        </ImgContainer>
    );


}

const ImgContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    //@media only screen and (max-width: 750px) {
    //    height: auto;
    //    align-items: start;
    //}
`

const StyledImg = styled(motion.img)`
    object-fit: cover;
    width: 100%;
    height: 100%;
    

    //@media only screen and (max-width: 750px) {
    //    border: 1px solid black;
    //    box-sizing: border-box;
    //    object-fit: contain;
    //    height: auto;
    //}

`


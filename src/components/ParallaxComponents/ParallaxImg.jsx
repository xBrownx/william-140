import {motion, useScroll, useTransform} from "framer-motion";
import React, {useRef} from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledImg = styled(motion.img)`
    object-fit: cover;
    height: 100%;
    width: 100%;
`

export const ParallaxImg = ({src, alt}) => {

    const targetRef = useRef(null);
    const {scrollYProgress, scrollY} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(
        scrollYProgress,
        [0, 0.25, 0.75, 1],
        ["-50%", "-25%", "25%", "50%"]
    );


    return (
        <ImgContainer ref={targetRef} id={"img-container"}>
            <StyledImg
                as={motion.img}
                style={{y: y1}}
                src={src}
                alt={alt}
            />
        </ImgContainer>
    );


}
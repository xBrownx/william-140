import {useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import { motion } from "framer-motion";
import { ImgContainer, StyledImg } from "./styles";

export const ParallaxImg = props => {

    const img = props.image;

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

    return (
        <ImgContainer
            ref={targetRef}
            id={"parallax-img-container"}
        >
            <StyledImg
                as={motion.img}
                style={{y: y1}}
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
            />
        </ImgContainer>
    );
}
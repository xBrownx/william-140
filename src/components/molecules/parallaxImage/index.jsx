import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ImgContainer, StyledImg } from "./styles";
import { memo } from "react";

export const ParallaxImg = memo(
    function ParallaxImg(props) {

        const img = props.image;

        const targetRef = useRef();
        const {scrollYProgress, scrollY} = useScroll({
            target: targetRef,
            offset: ["start end", "end start"]
        });

        const offset = useTransform(
            scrollYProgress,
            [0, 0.25, 0.75, 1],
            ["-50%", "-25%", "25%", "50%"]
        );

        const scale = useTransform(
            scrollYProgress,
            [0, 0.4, 0.6, 1],
            ["175%", "150%", "125%", "100%"]
        );

        return (
            <ImgContainer
                ref={targetRef}
                id={"parallax-img-container"}
            >
                <StyledImg
                    as={motion.img}
                    style={{scale: scale}}
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                />
            </ImgContainer>
        );
    }
);
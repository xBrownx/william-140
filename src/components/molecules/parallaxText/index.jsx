import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, memo } from "react";
import { Wrapper, StyledSpan } from './styles'

const DURATION = 0.20;
const STAGGER = 0.025;

const TextSplit = memo(
    function TextSplit({children}) {

        return children.split("").map((l, i) => (
            <StyledSpan
                as={motion.span}
                variants={{
                    hidden: {
                        y: "100%",
                    },
                    visible: {
                        y: "0",
                    },
                }}
                transition={{
                    duration: DURATION,
                    ease: "linear",
                    delay: STAGGER * i,
                }}
                key={i}
            >
                {l === ' ' ? <>&nbsp;</> : l}
            </StyledSpan>
        ))
    }
);

export const ParallaxText = memo(
    function ParallaxText({children}) {
        const lineSplit = children.split("\n");
        return (
            lineSplit.map((line) =>
                <Wrapper
                    as={motion.div}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        margin: "0px 0px -100px 0px",
                        amount: "some",
                        once: true
                    }}
                >
                    <>
                        <TextSplit>
                            {line}
                        </TextSplit>
                        <br />
                    </>

                </Wrapper>
            )
        );
    }
);

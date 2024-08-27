
import {motion, useScroll, useTransform} from "framer-motion";
import React, {useRef, useState} from "react";
import styled from "styled-components";


const DURATION = 0.15;
const STAGGER = 0.015;

const LineSpan = ({line}) => {
    const characterRef = useRef([]);
    console.log(`line = ${line}`);
    return (
        <>
            {
                line.split("").map((letter, i) => {
                    return (
                        <motion.span
                            variants={{
                                hidden: {
                                    y: "50%"
                                },
                                visible: {
                                    y: 0
                                }
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i
                            }}
                            style={{display: "inline-block"}}
                            ref={ref => characterRef.current[i] = ref}
                            key={`l_${i}`}
                        >
                            {letter === " " ? <>&nbsp;</> : letter}
                        </motion.span>
                    );
                })
            }
        </>
    );

}

export const TextTest = ({children}) => {
    let spanArray = [];

    console.log(`children = ${children}`);

    children.map((line, i) => {
        if (typeof line === 'string') {
            spanArray = ([...spanArray, LineSpan({line})])
        } else {
            spanArray = ([...spanArray, line])
        }
    });

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0.2}}
            transition={{staggerChildren: 0.05}}
        >
            {spanArray}
        </motion.div>
    );
}



export const ParallaxText = ({children}) => {

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
        <>
            {TextTest({children})}
        </>
    );
}
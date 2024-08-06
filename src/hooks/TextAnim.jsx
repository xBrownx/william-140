import React, {useRef} from "react";
import {motion} from "framer-motion";

export const CharSpan = ({word}) => {
    const characters = useRef([]);
    const DURATION = 0.25;
    const STAGGER = 0.025;
    return word.split("").map((letter, i) => {
        return (

            <motion.span
                variants={{
                    initial: {
                        y: "100%"
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
                ref={ref => characters.current[i] = ref}
                key={`l_${i}`}
            >
                {letter === " " ? <span>&nbsp;</span> : letter}
            </motion.span>

        )
    });
}

export const WordSpan = ({word}) => {
    const characters = useRef([]);
    const DURATION = 0.25;
    const STAGGER = 0.025;
    return word.split(" ").map((letter, i) => {
        return (

            <motion.span
                variants={{
                    initial: {
                        y: "100%"
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
                ref={ref => characters.current[i] = ref}
                key={`l_${i}`}
            >
                {<span>&nbsp;{letter}</span>}
            </motion.span>

        )
    });
}

export function Heading(word) {
    return (
        <motion.h1
            initial="initial"
            whileInView="visible"
            viewport={{amount: 0.2}}
            transition={{staggerChildren: 0.05}}
        >
            {CharSpan(word)}
        </motion.h1>
    );
}

export function ParaSpan(word) {
    return (
        <motion.p
            initial="initial"
            whileInView="visible"
            viewport={{amount: 0.2}}
            transition={{staggerChildren: 0.001}}
        >
            {WordSpan(word)}
        </motion.p>
    );
}

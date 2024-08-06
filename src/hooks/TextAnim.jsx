import React, {useRef} from "react";
import {motion, useMotionValueEvent, useScroll, useTransform, useWillChange} from "framer-motion";

export const CharSpan = ({word}) => {
    const characters = useRef([]);
    const DURATION = 0.2;
    const STAGGER = 0.025;
    return word.split("").map((letter, i) => {
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
                ref={ref => characters.current[i] = ref}
                key={`l_${i}`}
            >
                {letter === " " ? <span>&nbsp;</span> : letter}
            </motion.span>

        )
    });
}

export function HeadingAnim(word) {
    return (
        <motion.h1
            initial="hidden"
            whileInView="visible"

            viewport={{once: true, amount: 0.2}}
            transition={{staggerChildren: 0.05}}
        >
            {CharSpan(word)}
        </motion.h1>
    );
}



export const WordSpan = ({line}) => {

    const DURATION = 0.1;
    const STAGGER = 0.025;
    const words = useRef([]);

    const wordSplit = line.split(" ");

    return wordSplit.map((word, i) => {
        return (
            <motion.span
                variants={{
                    hidden: {y: "50%"},
                    visible: {y: 0}
                }}
                transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                    delay: STAGGER * i
                }}
                style={{display: "inline-block"}}
                ref={ref => words.current[i] = ref}
                key={`l_${i}`}
            >
                {<span>&nbsp;{word}</span>}
            </motion.span>
        )
    });
}

export function ParaAnim(line) {

    return (
        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{once: true ,amount: 0.2}}
            transition={{staggerChildren: 0.001}}
        >
            {WordSpan(line)}
        </motion.p>
    );
}




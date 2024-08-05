import React, {useRef} from "react";
import {motion} from "framer-motion";

export const WordSpan = ({word}) => {
    const characters = useRef([]);
    const DURATION = 0.25;
    const STAGGER = 0.025;
    return word.split("").map((letter, i) => {
        return (

            <motion.span
                variants={{
                    initial: {
                        y: 0,
                    },
                    hovered: {
                        // y: "-100%"
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
                {letter}
            </motion.span>

        )
    });
}

export function Heading(word) {
    return (
        <motion.h1
            initial="initial"
            whileHover="hovered"
            // transition={{staggerChildren: 0.2}}
        >
            {WordSpan(word)}
        </motion.h1>
    );
}
import {motion} from "framer-motion";
import React from "react";

export const LandingAnimation = ({x, y, delay, children}) => {
    return (
        <motion.div style={{width: "100%"}}
                    initial={{y: y}} animate={{y: 0}}
                    transition={{type: "spring", duration: 1, delay: delay}}
        >
            <motion.div
                style={{width: "100%"}}
                initial={{x: x}} animate={{x: 0}}
                transition={{type: "spring", duration: 1.3, delay: 1.2 + delay}}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
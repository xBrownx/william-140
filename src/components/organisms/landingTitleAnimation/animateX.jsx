import { motion } from "framer-motion";
import { memo } from "react";

export const AnimateX = memo(
    function AnimateX({x, delay, children}) {
        return (
            <motion.div
                style={{width: "100%"}}
                initial={{x: x}} animate={{x: 0}}
                transition={{
                    type: "spring",
                    duration: 1.3,
                    delay: 1.2 + delay
                }}
            >
                {children}
            </motion.div>
        );
    }
);
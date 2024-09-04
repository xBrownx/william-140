import { motion } from "framer-motion";
import { memo } from "react";

export const AnimateY = memo(
    function AnimateY({y, delay, children}) {
        return (
            <motion.div
                style={{width: "100%"}}
                initial={{y: y}}
                animate={{y: 0}}
                transition={{
                    type: "spring",
                    duration: 1,
                    delay: delay
                }}
            >
                {children}
            </motion.div>
        );
    }
);
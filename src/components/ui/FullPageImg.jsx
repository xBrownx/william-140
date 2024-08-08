import React, {useEffect, useRef} from 'react';
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";

const FullPageImg = (props) => {
    const targetRef = useRef(null);
    const containerRef = useRef(null);

    const {scrollYProgress, scrollY} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["-50%", "-25%", "25%", "50%"]);

    useMotionValueEvent(scrollYProgress, "change",
    (latest) => {
        console.log(`Posy == ${latest}`);
    })

    return (
        <section ref={containerRef} className="full-page-img">
            <motion.div ref={targetRef} className="page-container">
                <motion.img
                    style={{y: y1}}
                    src={props.src}
                    alt="Full Page Image"
                />
            </motion.div>
        </section>
    );
};

export default FullPageImg;
import React, {useLayoutEffect, useRef} from 'react';

import SplitType from 'split-type'
import {motion} from "framer-motion";
import {PrimaryButton} from "../../components/Buttons";
import {HeadingAnim} from "../../hooks/TextAnim";
import {HeadingDisplay} from "../../components/styles/Typography.styled";

function Landing(props) {

    // const heading = document.querySelector('h1');
    // const headingSplit = new SplitType(heading);
    // const letters = heading.querySelector('.char');

    useLayoutEffect(() => {

    })

    return (
        <section ref={props.pageRef.landingRef} className="landing">
            <div className="page-container">

                <div className="background"/>
                <div className="button-wrapper">
                    <PrimaryButton
                        onClick={() => {
                            props.pageRef.homeRef.current.scrollIntoView({behavior: "smooth"})
                        }}/>
                </div>

                <div className="content-wrapper">
                    <motion.div
                        className="title line-1"
                        initial={{ y: "500%" }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", duration: 1 }}
                    >
                        <motion.div
                            initial={{ x: "-50%" }}
                            animate={{ x: 0 }}
                            transition={{ type: "spring", duration: 1.3, delay: 1.2 }}
                        >
                            <HeadingDisplay>AN ICONIC</HeadingDisplay>
                        </motion.div>

                    </motion.div>

                    <motion.div
                        className="title line-2"
                        initial={{ y: "500%" }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", duration: 1, delay: 0.1 }}
                    >
                        <motion.div
                            initial={{ x: "50%" }}
                            animate={{ x: 0 }}
                            transition={{ type: "spring", duration: 1, delay: 1.2 }}
                        >
                            <h1>MELBOURNE</h1>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="title line-3"
                        initial={{ y: "500%" }}
                        animate={{ y: 0 }}
                        transition={{ type: "spring", duration: 1, delay: 0.15 }}
                    >
                        <motion.div
                            initial={{ x: "-50%"}}
                            animate={{ x: 0}}
                            transition={{ type: "spring", duration: 1, delay: 1.2 }}
                        >
                            <h1>LANDMARK</h1>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}


export default Landing;
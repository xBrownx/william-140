import React, {useLayoutEffect, useRef} from 'react';

import SplitType from 'split-type'
import {motion} from "framer-motion";
import {PrimaryButton} from "../../components/Buttons";
import {Heading} from "../../hooks/TextAnim";

function Landing(props) {

    // const heading = document.querySelector('h1');
    // const headingSplit = new SplitType(heading);
    // const letters = heading.querySelector('.char');

    useLayoutEffect(() => {

    })

    return (
        <section ref={props.pageRef} className="landing">
            <div className="container">
                <div className="background"/>
                <div className="button-wrapper">
                    <PrimaryButton scrollTo={props.scrollTo}/>
                </div>
                <div className="content-wrapper">
                    <div className="title line-1">
                        <Heading word={"AN ICONIC"}/>
                    </div>
                    <div className="title line-2">
                        <Heading word={"MELBOURNE"}/>
                    </div>
                    <div className="title line-3">
                        <Heading word={"LANDMARK"}/>
                    </div>

                </div>
            </div>
        </section>
    );
}



export default Landing;
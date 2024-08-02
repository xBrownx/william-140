import React, {useEffect, useRef, useState} from 'react';
import collage from "../../assets/Collage.png";
import './Home.css'
import './Home-Anim.css'
import {Parallax, ParallaxLayer, ParallaxProps} from '@react-spring/parallax'
import ElementObserver from "../../hooks/ElementObserver";
import {motion, useInView, useMotionValueEvent, useScroll, useTransform} from "framer-motion"

function Home(props) {

    // const homeElements = document.querySelectorAll(".home-2");
    // const observer = ElementObserver
    //
    // homeElements.forEach(el => observer.observe(el));


    // const { scrollYProgress } = useScroll({
    //     layoutEffect: false,
    //     container: props.containerRef,
    //     target: targetRef
    // });


    return (
        <motion.div className="home-container" ref={props.reff}>
            <div className="home-wrapper">

                <div className="home-title-container">
                    <div className="home-title-wrapper">
                        <h1>
                            An Iconic Landmark<br/>
                            in Melbourne
                        </h1>
                    </div>
                </div>

                <div className="home-content-container">
                    <div className="home-content-wrapper">
                        <div className="home-img-container">
                            <div className="home-img-wrapper">

                                <img
                                    src={collage}
                                    alt={"Collage"}
                                />
                            </div>
                        </div>

                        <div className="home-text-container">
                            <div className="home-text-wrapper">
                                <h2>
                                    Spaces for our<br/>
                                    tenants to thrive
                                </h2>
                                <p>
                                    Presenting a range of fully fitted tenancies available to<br/>
                                    lease. These opportunities, offer stunning views and<br/>
                                    natural light with access to the building’s first class<br/>
                                    facilities and amenities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    );
}

export default Home;
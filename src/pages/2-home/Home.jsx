import React, {useEffect, useRef, useState} from 'react';
import collage from "../../assets/Collage.png";
import './Home.css'
import './Home-Anim.css'
import {motion} from "framer-motion"
import Page from "../../components/Page";
import {useHomeAnim} from "../../hooks/HomeAnim";

function Home(props) {

    const headScroll = [0, 0.09, 0.099, 0.15];
    const bodyScroll = [0.05, 0.092, 0.12, 0.2];

    const anim = useHomeAnim(props.mainRef, headScroll, bodyScroll);

    return (
        <Page pageRef={props.pageRef} size={"single-page"}>
                <motion.div
                    className="home-title-container"
                    style={{
                        scale: anim.headScale,
                        opacity: anim.headFade,
                    }}
                >
                    <div className="home-title-wrapper">
                        <h1>
                            An Iconic Landmark<br/>
                            in Melbourne
                        </h1>
                    </div>
                </motion.div>

                <div className="home-content-container">
                    <div className="home-content-wrapper">
                        <div className="home-img-container">
                            <motion.div
                                className="home-img-wrapper"
                                style={{
                                    translateX: anim.bodyOffset,
                                    opacity: anim.bodyFade,
                                }}
                            >
                                <img
                                    src={collage}
                                    alt={"Collage"}
                                />
                            </motion.div>
                        </div>

                        <div className="home-text-container">
                            <div className="home-text-wrapper">
                                <motion.h2
                                style={{
                                    translateY: anim.bodyOffset,
                                    opacity: anim.bodyFade,
                                }}>
                                    Spaces for our<br/>
                                    tenants to thrive
                                </motion.h2>
                                <motion.p
                                style={{
                                    translateY: -anim.bodyOffset,
                                    opacity: anim.bodyFade,
                                }}>
                                    Presenting a range of fully fitted tenancies available to<br/>
                                    lease. These opportunities, offer stunning views and<br/>
                                    natural light with access to the building’s first class<br/>
                                    facilities and amenities.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
    );
}

export default Home;
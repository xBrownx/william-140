import React, {useEffect, useRef, useState} from 'react';
import {useHomeAnim} from "../../hooks/HomeAnim";
import {ScrollConst} from "../../util/PageRefs";
import {PrimaryTextButton} from "../../components/Buttons";
import {motion} from "framer-motion";
import {HeadingAnim, ParaAnim} from "../../hooks/TextAnim";


function Home(props) {

    const anim = useHomeAnim(props.mainRef, ScrollConst.homeHead, ScrollConst.homeBody);

    return (
        <section ref={props.pageRef.homeRef} className="home">
            <div className="page-container">
                <div className="content-container">
                    <div className="content-wrapper">
                        <HeadingAnim word={"Spaces for"} />
                        <HeadingAnim word={"our tenants"} />
                        <HeadingAnim word={"to thrive"} />

                        <div className="text-container">
                            <ParaAnim line={"Presenting a range of fully fitted tenancies available to lease."} />
                            <ParaAnim line={"These opportunities, offer stunning views and natural light with"} />
                            <ParaAnim line={"access to the building’s first class facilities and amenities."} />
                        </div>

                        <PrimaryTextButton
                            onClick={() => {
                                props.pageRef.availabilitiesRef.current.scrollIntoView({behavior: "smooth"})
                            }}
                            text={"Discover Availability"}
                        />
                    </div>
                </div>
            </div>

        </section>
);
}

export default Home;
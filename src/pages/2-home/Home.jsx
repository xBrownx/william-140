import React, {useEffect, useRef, useState} from 'react';
import {useHomeAnim} from "../../hooks/HomeAnim";
import {ScrollConst} from "../../util/PageRefs";
import {PrimaryTextButton} from "../../components/Buttons";

function Home(props) {

    const anim = useHomeAnim(props.mainRef, ScrollConst.homeHead, ScrollConst.homeBody);

    return (
        <section ref={props.pageRef.homeRef} className="home">
                <div className="content-container">
                    <div className="content-wrapper">
                        <h1>
                            Spaces for<br/>
                            our tenants<br/>
                            to thrive
                        </h1>
                        <p>
                            Presenting a range of fully fitted tenancies available to lease.<br/>
                            These opportunities, offer stunning views and natural light with<br/>
                            access to the building’s first class facilities and amenities.<br/>
                        </p>
                        <PrimaryTextButton
                            onClick={() => {
                                props.pageRef.availabilitiesRef.current.scrollIntoView({behavior: "smooth"})
                            }}
                            text={"Discover Availability"}
                        />
                    </div>
                </div>

        </section>
    );
}

export default Home;
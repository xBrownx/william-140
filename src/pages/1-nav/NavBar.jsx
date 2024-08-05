import React, {useEffect} from 'react';
import './NavBar.css'
import {ReactComponent as Title} from "../../assets/Title.svg";

function NavBar(props) {

    function isInPage(page, start, end) {
        return page >= start && page < end;
    }

    return (
        <div className="nav-bar-container">
            <div className="nav-bar-wrapper">
                <div className="nav-bar-title-container">
                    <Title className="nav-bar-title" onClick={props.toTop}/>
                </div>
                <ul>
                    <li onClick={() => props.pageRefs.mainRef.current.scrollIntoView({behavior: "smooth"})}>
                        Location
                    </li>

                    <li className={isInPage(props.page, 3.4, 5.8) ? "link-active" : ""}
                        onClick={() => props.pageRefs.lifestyleRef.current.scrollIntoView({behavior: "smooth"})}
                    >
                        Design
                    </li>
                    <li className={isInPage(props.page, 5.8, 7.5) ? "link-active" : ""}
                        onClick={() => props.pageRefs.designRef.current.scrollIntoView({behavior: "smooth"})}
                    >
                        Availability
                    </li>
                    <li className={isInPage(props.page, 7.5, 9) ? "link-active" : ""}
                        onClick={() => props.pageRefs.amenitiesRef.current.scrollIntoView({behavior: "smooth"})}>
                        Amenities
                    </li>
                    <li className={isInPage(props.page, 10.5, 12) ? "link-active" : ""}
                        onClick={() => props.pageRefs.availabilitiesRef.current.scrollIntoView({behavior: "smooth"})}>
                        History
                    </li>
                    <li onClick={() => props.pageRefs.enquiryRef.current.scrollIntoView({behavior: "smooth"})}>
                        Agencies
                    </li>
                    <li onClick={() => props.pageRefs.enquiryRef.current.scrollIntoView({behavior: "smooth"})}>
                        Enquire
                    </li>
                </ul>
            </div>
        </div>
        // </ParallaxLayer>
    );
}

export default NavBar;
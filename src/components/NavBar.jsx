import React from 'react';
import './HomePage.css'
import {ReactComponent as Title} from "../assets/Title.svg";

function HomePageNavBar(props) {
    return (
        <div className="nav-bar-wrapper">
            <div className="nav-bar-title-container">
                <Title className="nav-bar-title"/>
                {/*<h1>140 WILLIAM STREET</h1>*/}
            </div>
            <ul>
                <li>Top</li>
                <li>Lifestyle</li>
                <li>Design</li>
                <li>Amenities</li>
                <li>Availability</li>
                <li>Enquire</li>
            </ul>
        </div>
    );
}

export default HomePageNavBar;
import React from 'react';
import img from "../../assets/Rectangle 21 (1).png";
import './AmenitiesPage.css'
import {ParallaxLayer} from "@react-spring/parallax";

function AmenitiesPage(props) {
    return (
        <ParallaxLayer
            className="amenities-page-parallax"
            offset={props.offset}
            factor={props.factor || 1}
        >
            <div className="amenities-page-wrapper">
                <div className="amenities-page-container">
                    <div className="amenities-page-title-wrapper">
                        <h2>AMENITIES</h2>
                        <h1>
                            Inspired Services<br/>
                            and Amenities
                        </h1>
                    </div>
                    <div className="amenities-page-content-wrapper">
                        <div className="amenities-page-img-wrapper">
                            <p>Render</p>
                        </div>
                        <div className="amenities-page-list-wrapper">
                            <ul className="amenities-page-list">
                                <li>
                                    <div className="amenities-list-img"/>
                                    <div className="list-item-container">
                                        <h3>Hotel Style Concierge</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="amenities-list-img"/>
                                    <div className="list-item-container">
                                        <h3>Dry Cleaning</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="amenities-list-img"/>
                                    <div className="list-item-container">
                                        <h3>Bike Storage and Workshop</h3>
                                        <p>Approx. 420 sqm</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="amenities-list-img"/>
                                    <div className="list-item-container">
                                        <h3>Cafe</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="amenities-list-img"/>
                                    <div className="list-item-container">
                                        <h3>Car Parking</h3>
                                        <p>200 cars</p>
                                    </div>

                                </li>
                                <li>
                                    <div className="amenities-list-img"/>
                                    <div className="list-item-container">
                                        <h3>Resort Style Change Facilities</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="amenities-list-img"/>
                                    <div className="list-item-container">
                                        <h3>RACV Club</h3>
                                        <p>Next door</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default AmenitiesPage;
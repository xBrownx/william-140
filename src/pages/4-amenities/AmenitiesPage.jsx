import React from 'react';
import './AmenitiesPage.css'
import {ParallaxLayer} from "@react-spring/parallax";

import bikeStorage from '../../assets/BikeStorage.png'
import cafe from '../../assets/Cafe.png'
import resort from '../../assets/Resort.png'

function AmenitiesPage(props) {

    const [imgSrc, setImgSrc] = React.useState("Render");

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
                            <p>{imgSrc}</p>
                        </div>
                        <div className="amenities-page-list-wrapper">
                            <ul className="amenities-page-list">

                                <ListItem
                                    heading={"Hotel Style Concierge"}
                                    subHeading={""}
                                    onClick={(e) => setImgSrc("Hotel Style Concierge")}
                                />

                                <ListItem
                                    heading={"Dry Cleaning"}
                                    subHeading={""}
                                    onClick={(e) => setImgSrc("Dry Cleaning")}
                                />

                                <ListItem
                                    heading={"Bike Storage and Workshop"}
                                    subHeading={"Approx. 420 sqm"}
                                    imgSrc={bikeStorage}
                                    onClick={(e) => setImgSrc("Bike Storage and Workshop")}
                                />

                                <ListItem
                                    heading={"Cafe"}
                                    subHeading={""}
                                    imgSrc={cafe}
                                    onClick={(e) => setImgSrc("Cafe")}
                                />

                                <ListItem
                                    heading={"Car Parking"}
                                    subHeading={"200 cars"}
                                    onClick={(e) => setImgSrc("Car Parking")}
                                />

                                <ListItem
                                    heading={"Resort Style Change Facilities"}
                                    subHeading={""}
                                    imgSrc={resort}
                                    onClick={(e) => setImgSrc("Resort Style Change Facilities")}
                                />

                                <ListItem
                                    heading={"RACV Club"}
                                    subHeading={"Next door"}
                                    onClick={(e) => setImgSrc("RACV Club")}
                                />

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    );
}

const ListItem = (props) => {
    return (
        <li onClick={props.onClick}>

            <div className="amenities-list-img">
                { props.imgSrc &&
                <img src={props.imgSrc} alt={"img"} />
                    }
            </div>

            <div className="list-item-container">
                <h3>{props.heading}</h3>
                <p>{props.subHeading}</p>
            </div>
        </li>
    );
}

export default AmenitiesPage;
import React from 'react';
import './AvailabilityPage.css'
import {ReactComponent as Img} from "../../assets/Group 5339.svg";
import {ReactComponent as Dld} from "../../assets/download.svg";
import {ParallaxLayer} from "@react-spring/parallax";

function AvailabilityPage(props) {
    return (
        <ParallaxLayer
            className="availability-page-parallax"
            offset={props.offset}
            factor={props.factor || 1}
        >
            <div className="availability-page-wrapper">
                <div className="availability-page-container">
                    <div className="availability-page-title-wrapper">
                        <h2>AVAILABILITY</h2>
                        <h1>Your Future Workplace</h1>
                        <div className="availability-page-content-wrapper">
                            <table>
                                <thead>
                                <tr className="head">
                                    <th></th>
                                    <th>TENANCY</th>
                                    <th>FLOOR</th>
                                    <th>LFA</th>
                                    <th>STATUS</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="td-img"><Img/></td>
                                    <td className="td-tenancy">Office</td>
                                    <td className="td-floor">Ground Floor</td>
                                    <td className="td-lfa">1572 m2</td>
                                    <td className="td-status">Available</td>
                                    <td className="td-btn">
                                        <div className="floor-plan-btn"><Dld/>Floor Plan</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-img"><Img/></td>
                                    <td className="td-tenancy">Office</td>
                                    <td className="td-floor">Ground Floor</td>
                                    <td className="td-lfa">1572 m2</td>
                                    <td className="td-status">Available</td>
                                    <td className="td-btn">
                                        <div className="floor-plan-btn"><Dld/>Floor Plan</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-img"><Img/></td>
                                    <td className="td-tenancy">Office</td>
                                    <td className="td-floor">Ground Floor</td>
                                    <td className="td-lfa">1572 m2</td>
                                    <td className="td-status">Available</td>
                                    <td className="td-btn">
                                        <div className="floor-plan-btn"><Dld/>Floor Plan</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-img"><Img/></td>
                                    <td className="td-tenancy">Office</td>
                                    <td className="td-floor">Ground Floor</td>
                                    <td className="td-lfa">1572 m2</td>
                                    <td className="td-status">Available</td>
                                    <td className="td-btn">
                                        <div className="floor-plan-btn"><Dld/>Floor Plan</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default AvailabilityPage;
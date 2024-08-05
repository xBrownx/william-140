import React from 'react';
import {Heading} from "../../hooks/TextAnim";

import carousel1 from '../../assets/design/Carousel-1.png'

function Design(props) {

    return (
        <section className="design">
            <div className="heading-container">
                <div className="sub-heading">
                    <Heading word={"DESIGN"}/>
                </div>
                <div className="title line-1">
                    <Heading word={"A_memorable"}/>
                </div>
                <div className="title line-2">
                    <Heading word={"arrival_experience"}/>
                </div>
            </div>
            <div className="content-container">
                <img src={carousel1} alt={"carousel item"}/>
            </div>
        </section>
    );
}

export default Design;
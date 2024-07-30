import React, {useEffect, useRef, useState} from 'react';
import collage from "../assets/Collage.png";
import './HomePage-2.css'
import {Parallax, ParallaxLayer, ParallaxProps} from '@react-spring/parallax'

function HomePage2(props) {

    const [animDirection, setAnimDirection] = useState("anim-down");
    const [lastPage, setLastPage] = useState(0);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('anim-up');
                entry.target.classList.remove('anim-down');
            } else {
                entry.target.classList.add(animDirection);
                entry.target.classList.remove('show');
            }
        })
    })

    useEffect(() => {
        if (props.page > 1) {
            setAnimDirection("anim-up");
        } else {
            setAnimDirection("anim-down");
        }
        setLastPage(props.page);
    }, [props.page]);

    const lifeStyleElements = document.querySelectorAll(".lifestyle-page");
    lifeStyleElements.forEach(el => observer.observe(el));

    return (
        <div className="lifestyle-page lifestyle-page-wrapper">

            <div className="lifestyle-page lifestyle-page-title-wrapper">
                <h1>An Iconic Landmark<br/>in Melbourne</h1>
            </div>
            <div className="lifestyle-page lifestyle-page-content-wrapper">
                <div className="lifestyle-page lifestyle-page-img-wrapper">
                    <div className="lifestyle-page lifestyle-page-img-container">
                        <img src={collage} alt={"Collage"}/>
                    </div>
                </div>
                <div className="lifestyle-page lifestyle-page-text-wrapper">
                    <div className="lifestyle-page lifestyle-page-text-container">
                        <h2>Spaces for our tenants to thrive</h2>
                        <p>Presenting a range of fully fitted tenancies available to lease. These opportunities, offer
                            stunning views and natural light with access to the building’s first class facilities and
                            amenities.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage2;
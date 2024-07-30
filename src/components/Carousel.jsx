import React, {useState} from 'react';
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carousel.css'

import s1 from '../assets/Landing-bg.png'
import {ParallaxLayer} from "@react-spring/parallax";

function CarouselPage(props) {

    const [previousIndex, setPreviousIndex] = useState(0);

    const swiper = new Swiper('.swiper', {
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        effect: 'creative',
        creativeEffect: {
            prev: {
                transform: "scale(0.5)",
            },
            next: {
                transform: "scale(0.5)",
            },
        },
        initialSlide: previousIndex

    });



    function getPreviousIndex() {
        setPreviousIndex(swiper.realIndex);
    }

    swiper.on('slideChange', function () {
        getPreviousIndex();
    });

    return (
        <ParallaxLayer
            className="carousel-page-parallax"
            offset={props.offset}
            factor={props.factor}
            speed={props.speed}
            style={{
                background: `var(--primary-bg-colour)`,
            }}
        >
            <div className="swiper-container" style={{zIndex: 1}}>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={s1} alt={"slide 1"}/>
                        </div>
                        <div className="swiper-slide">
                            <img src={s1} alt={"slide 1"}/>
                        </div>
                        <div className="swiper-slide">
                            <img src={s1} alt={"slide 1"}/>
                        </div>
                    </div>

                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>


                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default CarouselPage;
import React, {useState} from 'react';

import carousel1 from './assets/1-concierge.png'
import carousel2 from '../00-assets/2-lobby.png'
import carousel3 from './assets/3-multi_room.png'
import carousel4 from './assets/4-gym.png'
import carousel5 from './assets/5-shower.png'
import carousel6 from './assets/6-parking.png'
import carousel7 from './assets/7-cafe.png'
import {HeadingAnim} from "../../hooks/TextAnim";

import {ReactComponent as Icon1} from './assets/Icon-1.svg'
import {ReactComponent as Icon2} from './assets/Icon-2.svg'
import {ReactComponent as Icon3} from './assets/Icon-3.svg'
import {ReactComponent as Icon4} from './assets/Icon-4.svg'
import {ReactComponent as Icon5} from './assets/Icon-5.svg'
import {ReactComponent as Icon6} from './assets/Icon-6.svg'
import {ReactComponent as Icon7} from './assets/Icon-7.svg'


function Amenities(props) {


    const labelList = [
        "Hotel style concierge",
        "Flexible space suitable for short term use",
        "Bookable multi-purpose space",
        "Gym and cardio room",
        "Resort style end of trip facilities",
        "On site car parking",
        "On site cafe"
    ]

    const imgList = [
        carousel1,
        carousel2,
        carousel3,
        carousel4,
        carousel5,
        carousel6,
        carousel7
    ]

    // setImgSrc(imgList[i])

    const initState = () => {
        return [
            {className: "", src: carousel1, alt: labelList[0]},
            {className: "hidden", src: carousel2, alt: labelList[1]},
            {className: "hidden", src: carousel3, alt: labelList[2]},
            {className: "hidden", src: carousel4, alt: labelList[3]},
            {className: "hidden", src: carousel5, alt: labelList[4]},
            {className: "hidden", src: carousel6, alt: labelList[5]},
            {className: "hidden", src: carousel7, alt: labelList[6]},
        ];
    }

    const [imgProps, setImgProps] = useState(initState);

    function handleImgChange(e, i) {
        e.preventDefault()
        let newState = initState()
        newState[i].className = "show"

        setImgProps(newState)
    }

    const IImage = (props) => {
        return (
            <div className={"img-wrapper " + props.className} >
                <img {...props} />
            </div>
        );

    }

    const iconList = [
        Icon1,
        Icon2,
        Icon3,
        Icon4,
        Icon5,
        Icon6,
        Icon7,
    ]

    const [imgSrc, setImgSrc] = React.useState(imgList[0]);

    return (
        <section ref={props.pageRef.amenitiesRef} className="amenities">
            <div className="page-container">
                <div className="content-container">

                    <div className="column-container">
                        <div className="img-container">
                            {/*<img className="hidden-ph" src={imgSrc} alt={labelList[0]}/>*/}

                            {
                                imgProps.map((inputProps) => {
                                        return (<IImage {...inputProps} />)
                                    }
                                )}
                        </div>
                    </div>

                    <div className="column-container">
                        <div className="heading-container">
                            <div className="sub-heading">
                                <HeadingAnim word={"AMENITIES"}/>
                            </div>
                            <div className="title line-1">
                                <HeadingAnim word={"Elite services"}/>
                            </div>
                            <div className="title line-2">
                                <HeadingAnim word={"and 00-assets"}/>
                            </div>
                        </div>

                        <div className="list-wrapper">
                            <ul className="list">
                                {labelList.map((item, i) => (
                                    <ListItem
                                        heading={item}
                                        Icon={iconList[i]}
                                        onMouseEnter={(e) => {
                                            handleImgChange(e, i)
                                        }}
                                    />
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

const ListItem = (props) => {
    return (
        <li>
            <div className="list-item-container" onMouseEnter={props.onMouseEnter}>
                <props.Icon/>
                <h3>{props.heading}</h3>
            </div>
        </li>
    );
}

export default Amenities;
import React from 'react';

import carousel1 from '../../assets/amenities/1-concierge.png'
import carousel2 from '../../assets/amenities/2-lobby.png'
import carousel3 from '../../assets/amenities/3-multi_room.png'
import carousel4 from '../../assets/amenities/4-gym.png'
import carousel5 from '../../assets/amenities/5-shower.png'
import carousel6 from '../../assets/amenities/6-parking.png'
import carousel7 from '../../assets/amenities/7-cafe.png'
import {Heading} from "../../hooks/TextAnim";

import { ReactComponent as Icon1 } from '../../assets/amenities/Icon-1.svg'
import { ReactComponent as Icon2 } from '../../assets/amenities/Icon-2.svg'
import { ReactComponent as Icon3 } from '../../assets/amenities/Icon-3.svg'
import { ReactComponent as Icon4 } from '../../assets/amenities/Icon-4.svg'
import { ReactComponent as Icon5 } from '../../assets/amenities/Icon-5.svg'
import { ReactComponent as Icon6 } from '../../assets/amenities/Icon-6.svg'
import { ReactComponent as Icon7 } from '../../assets/amenities/Icon-7.svg'


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
                        <div className="img-wrapper">
                            <img src={imgSrc} alt={labelList[0]}/>
                        </div>
                    </div>

                    <div className="column-container">
                        <div className="heading-container">
                            <div className="sub-heading">
                                <Heading word={"AMENITIES"}/>
                            </div>
                            <div className="title line-1">
                                <Heading word={"Elite_services"}/>
                            </div>
                            <div className="title line-2">
                                <Heading word={"and_amenities"}/>
                            </div>
                        </div>

                        <div className="list-wrapper">
                            <ul className="list">
                                {labelList.map((item, i) => (
                                    <ListItem
                                        heading={item}
                                        Icon={iconList[i]}
                                        onMouseEnter={(e) => setImgSrc(imgList[i])}
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
                <props.Icon />
                <h3>{props.heading}</h3>
            </div>
        </li>
    );
}

export default Amenities;
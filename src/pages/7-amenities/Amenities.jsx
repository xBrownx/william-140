import React from 'react';
import './AmenitiesPage.css'

import {ScrollConst} from "../../util/PageRefs";

function Amenities(props) {

    const [imgSrc, setImgSrc] = React.useState(0);

    const LABEL_LIST = [
        "Hotel style concierge",
        "Flexible space suitable for short term use",
        "Bookable multi-purpose space",
        "Gym and cardio room",
        "Resort style end of trip facilities",
        "On site car parking",
        "On site cafe"
    ]


    return (
        <section className="amenities">
            <div className="content-container">
                <div className="img-wrapper">

                </div>
                <div className="list-wrapper">
                    <ul className="list">
                        {LABEL_LIST.map((item, i) => (
                            <ListItem
                            heading={item}
                            onClick={(e) => setImgSrc(i)}
                        />
                        ))}
                        {/*<ListItem*/}
                        {/*    heading={"Hotel style concierge"}*/}
                        {/*    onClick={(e) => setImgSrc(0)}*/}
                        {/*/>*/}

                        {/*<ListItem*/}
                        {/*    heading={"Flexible space suitable for short term use"}*/}
                        {/*    onClick={(e) => setImgSrc(1)}*/}
                        {/*/>*/}

                        {/*<ListItem*/}
                        {/*    heading={"Bookable multi-purpose space"}*/}
                        {/*    onClick={(e) => setImgSrc(2)}*/}
                        {/*/>*/}

                        {/*<ListItem*/}
                        {/*    heading={"Gym and cardio room"}*/}
                        {/*    onClick={(e) => setImgSrc(3)}*/}
                        {/*/>*/}

                        {/*<ListItem*/}
                        {/*    heading={"Resort style end of trip facilities"}*/}
                        {/*    onClick={(e) => setImgSrc(4)}*/}
                        {/*/>*/}

                        {/*<ListItem*/}
                        {/*    heading={"On site car parking"}*/}
                        {/*    onClick={(e) => setImgSrc(5)}*/}
                        {/*/>*/}

                        {/*<ListItem*/}
                        {/*    heading={"On site cafe"}*/}
                        {/*    onClick={(e) => setImgSrc(6)}*/}
                        {/*/>*/}

                    </ul>
                </div>
            </div>
        </section>

    );
}

const ListItem = (props) => {
    return (
        <li onClick={props.onClick}>
            <div className="list-item-container">
                <h3>{props.heading}</h3>
            </div>
        </li>
    );
}

export default Amenities;
import React, {forwardRef} from 'react';

import {StyledSection} from "../components/styles/SectionContainer.styled";
import {amenitiesCarouselItems} from '../util/constants'

export const Amenities = forwardRef(function({id}, ref) {
    const IImage = (props) => {
        return (
            <div className={"img-wrapper " + props.className} >
                <img {...props} />
            </div>
        );

    }

    return (
        <StyledSection id={id}
            ref={ref}
            $secondary
        >
            <div className="page-container">
                <div className="content-container">

                    <div className="column-container">
                        <div className="img-container">
                            {
                                // imgProps.map((inputProps, i) => {
                                //         return (<IImage key={i}{...inputProps} />)
                                //     }
                                // )
                            }
                        </div>
                    </div>

                    <div className="column-container">
                        <div className="heading-container">
                            <div className="sub-heading">

                            </div>
                            <div className="title line-1">

                            </div>
                            <div className="title line-2">

                            </div>
                        </div>

                        <div className="list-wrapper">
                            <ul className="list">
                                {/*{labelList.map((item, i) => (*/}
                                {/*    <ListItem*/}
                                {/*        key={i}*/}
                                {/*        heading={item}*/}
                                {/*        Icon={iconList[i]}*/}
                                {/*        onMouseEnter={(e) => {*/}
                                {/*            handleImgChange(e, i)*/}
                                {/*        }}*/}
                                {/*    />*/}
                                {/*))}*/}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </StyledSection>

    );
});

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

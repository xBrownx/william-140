import React from "react";
import styled from "styled-components";
import {ListItem} from "./AmenitiesListItem";

export const AmenitiesList = ({amenitiesItems, handleSlideChange}) => {
    return (
        <AmenitiesListWrapper>
            {amenitiesItems.map(({icon, title}, i) => (
                    title !== "Default" ?
                        <ListItem
                            Icon={icon}
                            title={title}
                            idx={i}
                            handleSlideChange={handleSlideChange}
                        />
                        : <></>
                )
            )}
        </AmenitiesListWrapper>
    );
}

const AmenitiesListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    border-left: 1px solid #84936E;
    gap: var(--height-16px);
    margin: var(--height-32px) 0 0 0;
    padding: 0 0 0 var(--width-32px);
    
`
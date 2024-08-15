import React from "react";
import {ListItemStyled, AmenitiesListWrapper} from "./Amenities.styled";

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

const ListItem = ({Icon, title, idx, handleSlideChange}) => {
    return (
        <ListItemStyled
            key={`${idx}_li`}
            onMouseEnter={() => handleSlideChange(idx)}
            onMouseLeave={() => handleSlideChange(0)}
        >
            <Icon/>
            <h3>{title}</h3>
        </ListItemStyled>
    );
}
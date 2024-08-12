import React from "react";
import styled from "styled-components";

export const ListItem = ({Icon, title, idx, handleSlideChange}) => {
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

const ListItemStyled = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--height-16px);
    
    
    &:hover {
        cursor: pointer;
        h3, svg {
            opacity: 1;
        }
        animation: item-hover 300ms ease-in-out;
        animation-fill-mode: both;
    }
    
    h3, svg {
        opacity: 0.7;
        transition: all 200ms ease-in-out;
    }
    
    h3 {
        margin: 0;
        padding: var(--height-16px) 0;
        font-size: var(--font-size-16px);
        font-weight: 400;
        font-family: var(--font-fmaily-secondary-light), serif;
        color: #FFF;
    }
    
    @keyframes item-hover {
        0% {
            scale: 1;
        }
        40% {
            scale: 1.03;
        }
        60% {
            
        }
        100% {
            scale: 1.01;
        }
    }
    
    
    
    
`
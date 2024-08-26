import React, {useState} from 'react'
import {LevelVector} from "../levelVector";
import {NumberButton} from "../../atoms";
import * as S from './styles'

export const LevelButton = props => {
    return (
            <NumberButton
                $active={props.active}
                $isHover={props.item.key === props.hoverKey}
                onMouseEnter={() => props.setHover(props.item.key)}
                onMouseLeave={() => props.setHover(null)}
                onClick={() => props.onLevelClick(props.item.key)}
            >
                {props.children}
            </NumberButton>
    );
}
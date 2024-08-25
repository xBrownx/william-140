import React, {useState} from 'react'
import {LevelVector} from "../levelVector";
import {NumberButton} from "../../atoms";
import * as S from './styles'

export const LevelButton = props => {
    return (
        <S.Wrapper {...props}>
            <NumberButton
                $active={props.active}
                $isHover={props.idx === props.hoverIdx}
                onMouseEnter={() => props.setHover(props.idx)}
                onMouseLeave={() => props.setHover(null)}
                onClick={() => props.onClick(props.item)}
            >
                {props.children}
            </NumberButton>
        </S.Wrapper>
    );
}
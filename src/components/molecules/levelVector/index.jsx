import * as S from './styles'
import {useState} from "react";

export const LevelVector = props => {
    return (
        <S.Wrapper
            {...props}
            $active={props.isActive}
            $isHover={props.idx === props.hoverIdx}
            onMouseEnter={() => props.setHover(props.idx)}
            onMouseLeave={() => props.setHover(null)}
            onClick={() => props.onClick(props.item)}
        >
            {props.children}
        </S.Wrapper>
    );
}
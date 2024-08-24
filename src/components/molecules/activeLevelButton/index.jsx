import React, {useState} from 'react'

import {LevelVector} from "../levelVector";
import {NumberButton} from "../../atoms";
import * as S from './styles'

export const ActiveLevelButton = props => {
    const [isHover, setHover] = useState(false);

    return (
        <S.Wrapper {...props}>

            <LevelVector
                $active={props.active}
                $isHover={isHover}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />

            <NumberButton
                $active={props.active}
                $isHover={isHover}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {props.children}
            </NumberButton>
        </S.Wrapper>
    );
}
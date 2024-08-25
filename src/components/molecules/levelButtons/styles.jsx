import styled, {css} from "styled-components";
import {pxToViewHeight, pxToViewWidth} from "../../atoms/globalStyles";
import {Style as S} from '../../atoms'

export const Container = styled.div`
    position: absolute;
    ${S.margin.__({
        top: 581,
        left: 489 * 2 + 19
    })};

    
    ${S.flex.column};
    ${S.gap.height(76)};
`

export const Wrapper = styled.div`
    ${S.flex.column};
    ${props => props.gap && css`
        ${S.gap.height(props.gap)};
    `}

`

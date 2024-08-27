import styled, { css } from 'styled-components'
import { Style as S, Colour as C, Font as F } from '../../atoms'
export const Container = styled.div`
    position: relative;
    ${C.background.secondary}
    display: flex;
    width: 100%;
    align-items: end;
    ${S.padding.__({bottom: 32})};
    z-index: 0;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    ${S.padding.inlineBlock({inline: 32})}
`

export const LeftDiv = styled.div`
    flex: 1;
`
export const CentreDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`
export const RightDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
`

export const StyledText = styled.p`
    ${S.padding.none};
    ${S.margin.none};
    ${F.family.secondaryLight};
    ${F.size(14)};
    font-weight: 700;
    color: #fff;
`

import styled, { css } from 'styled-components'
import { Style as S, Colour as C, Font as F, Media as M } from '../../atoms'
export const Container = styled.div`
    position: relative;
    ${C.background.secondary}
    display: flex;
    width: 100%;
    align-items: end;
    ${S.padding.__({bottom: 32})};
    z-index: 0;
    ${S.size.height(128)}
    
    ${M.md`
        flex-direction: column;
        height: fit-content;
        align-items: center;
        padding: 0;
        z-index: 1;
    `};
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
    height: 100%;
    align-items: end;
    img {
        display: flex;
        height: 200px;
        justify-content: end;
        align-items: end;
        transform: translateY(50px)
    }
`

export const StyledText = styled.p`
    ${S.padding.none};
    ${S.margin.none};
    ${F.family.secondaryLight};
    ${F.size(14)};
    font-weight: 700;
    color: #fff;
    
    ${M.md`
        font-size: 14px;
        line-height: 27px;
        padding-bottom: 16px;
    `};
`

export const MobileWrapper = styled.div`
    display: flex;
    padding-top: 144px;
    flex-direction: column;
    align-items: center;
`

export const CustomImage = styled.img`
    width: 150px;
    
`

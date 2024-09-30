import styled from 'styled-components';
import { Style as S, Font as F } from '../../atoms'

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #162425;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

export const Wrapper = styled.div`
    position: relative;
    ${S.size.height(194)};
    ${S.size.width(523)};
    display: flex;
    flex-direction: column;
`

export const StyledImage = styled.img`
    position: absolute;
    ${S.size.height(194)};
    transform: translate(0, -50%);
`

export const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ProgressBar = styled.progress`
    transition: all 0.1s;
    ${S.size.width(523)};
    ${S.size.height(136)};
    ${S.padding.inlineBlock({inline: 32})}
    background: transparent;
    
    &::-webkit-progress-bar {
        background: transparent;
        border-radius: 0;
    }
    
    &::-webkit-progress-value {
        background-color: #DED9D0;
        transition: width 1s;
    }
`

export const StyledP = styled.p`
    ${F.size(64)};
    ${F.family.primaryLight};
    color: #DED9D0;
    ${F.lineHeight(84.54)};
`
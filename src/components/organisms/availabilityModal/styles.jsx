import styled, { css } from "styled-components";
import { Style as S, Font as F, Colour as C } from '../../atoms'
import { DESIGN as props } from "../../atoms/globalStyles/DimensionCalcs";

export const Title = styled.h1`
    ${F.family.primaryLight};
    ${F.size(48)};
    ${F.lineHeight(57.6)};
    ${C.font.neutral};
    font-weight: 300;
`

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    ${S.size.width(96)};
`

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${S.padding.__({left: 16})};
    border-left: 1px solid white;
    height: fit-content;
    padding-bottom: 8px;
`

export const StyledUl = styled.ul`
    list-style: none;
    
`

export const StyledLi = styled.li`
    ${S.size.width(249)};
    display: flex;
    flex-direction: row;
    ${S.gap.width(16)};
`

export const LabelWrapper = styled.div`
    ${S.size.width(150)};
`

export const ValueWrapper = styled.div`
    ${S.size.width(67)};
`

export const VectorWrapper = styled.div`
    ${S.size.width(307)};
    ${S.size.height(390.5)};
    ${S.margin.__({top: 64})};
    
    display: flex;
    align-items: center;

    img {
        ${S.size.width(307)};
    }
`

export const CustomButton = styled.button`

    ${F.size(16)};
    ${F.family.secondaryLight};
    ${S.borderRadius};
    ${S.margin.none};
    ${S.flex.centre};
    font-weight: 300;
    background: transparent;
    border-width: 1px;
    border-style: solid;
    color: white;
    border-color: white;
    padding: 0.5em 1.5em;
    overflow: hidden;
    position: relative;
    ${S.size.height(40)};
    ${S.gap.width(8)};
    z-index: 1;
    justify-content: center;

    width: 100%;
    &:hover {
        cursor: pointer;
        color: #FFF;
    }

    &::after {
        content: "";
        background: #164A49;
        position: absolute;
        z-index: -1;
        padding: 0.5em 1.5em;
        display: block;
        transition: all 0.35s;
        left: 0;
        right: 0;
        top: -100%;
        bottom: 100%;
    }

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    }
    
    img {
        ${S.size.height(24)};
    }

`

export const CarouselWrapper = styled.div`
    
    img {
        object-fit: cover;
        object-position: center center;
        ${S.size.width(532)} !important;
        ${S.size.height(299)};
        ${S.size.maxWidth(532)} !important;
    }
`

export const ModalContainer = styled.div`
    
`

export const ModalWrapper = styled.div`

`

export const CustomHeading = styled.h1`

`

export const TenancyWrapper = styled.div``

export const CustomSubheading = styled.h2`

`

export const ImageWrapper = styled.div``
import styled from "styled-components";
import {Style as S, Font as F} from '../../atoms'

export const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
`

export const TxtWrapper = styled.div`

`

const AgentDetails = styled.div`
    
    p {
        margin: 0;
        padding: var(--height-8px) 0 0 0;
        color: white;
        opacity: 0.7;
        font-size: var(--font-size-14px);
        line-height: var(--line-height-14px);
        font-weight: 400;
        font-family: var(--font-fmaily-secondary-light), serif;
    }
`

export const Name = styled.h1`
    ${S.padding.none};
    ${S.margin.none};
    ${F.family.primaryRegular}
    color: white;
    font-weight: 400;
`

export const Phone = styled.p`
    ${S.margin.none};
    ${S.padding.__({top: 8})};
    ${F.size(14)};
    ${F.family.secondaryLight};
    font-weight: 400;
    color: white;
    opacity: 0.7;
`

export const Email = styled.p``

export const StyledImg = styled.img`
    width: 9.887vh;
    height: 9.887vh;
`

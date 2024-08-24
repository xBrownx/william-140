import styled, {css} from 'styled-components';
import {Style as S} from '../../atoms/globalStyles';

export const Wrapper = styled.div`
    border-left: 1px solid var(--color-primary-4);
    ${S.margin.__({top:28})};
    ${S.padding.__({bottom: 32, left: 32})};
    
    ${props => props.$displayEnd && css`
        ${S.margin.none}
        ${S.padding.__({left: 32})};
        display: flex;
        align-items: end;
        justify-content: end;
    `}
    
    ${props=> props.$row && css`
        ${S.size.width(600)};
    `};
    

    ${props => props.$variant && css`
        ${S.padding.none};
        border: none;
    `}
`

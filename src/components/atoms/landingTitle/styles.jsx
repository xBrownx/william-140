import styled, {css} from 'styled-components'
import { Style as S, Font as F, Colour as C } from '../globalStyles';

export const StyledHeading = styled.h1`
    z-index: 2;
    ${F.size(138)};
    ${F.family.primaryLight};
    ${C.font.mainDisplay};
    ${F.lineHeight(128)};
    font-weight: 300;
    ${props => props.justify && css`
        display: flex;
        justify-content: ${props.justify};
    `}
    
    ${props => props.$clone && css`
        color: #162425 !important;
        opacity: 1 !important;
    `}
       
    
    
`
import styled, {css} from 'styled-components'
import { Style as S, Font as F, Colour as C, Media as M } from '../globalStyles';

export const StyledHeading = styled.h1`
    z-index: 2;
    ${F.size(138)} ;
    ${F.family.primaryLight};
    ${C.font.mainDisplay};
    ${F.lineHeight(128)};
    font-weight: 300;
    
    ${props => props.$justify && css`
        display: flex;
        justify-content: ${props.$justify};
    `};
    
    
    ${M.md`
        font-size: 48px !important;
        line-height: 48px !important; 
        height: auto;
        width: 100%;
        margin: 0;
        padding: 0;
    `};
`
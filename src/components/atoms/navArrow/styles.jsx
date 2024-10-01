import styled, {css} from "styled-components";
import { Media as M, Style as S } from '../globalStyles'

export const Wrapper = styled.div`
    ${S.size.width(24)};
    ${S.size.height(24)};
    ${S.margin.__({bottom: 8})};
    
    ${props => props.$flipped && css`
        rotate: 180deg;
        ${S.margin.__({top: 8})};
    `}
    
    svg {
        width: 100%;
        height: 100%;
        
        &:hover {
            cursor: pointer;
        }
    }
    
    ${props => props.$right && css`
        rotate: 90deg;
    `}
    
    ${props => props.$left && css`
        rotate: -90deg;
    `}

    ${M.md`
        width: 24px;
        height: 24px;
    `};
`
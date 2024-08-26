import styled, {css} from "styled-components";
import { Style as S } from '../../atoms'

export const Wrapper = styled.div`
    ${S.flex.row};
    width: max-content;
    height: 100%;
    gap: 40px;
    ${S.size.height(300)};
    
`


export const ImgContainer = styled.div`
    height: 100%;
    object-fit: cover;
`

export const StyledImg = styled.img`
    object-fit: cover;
    height: 100%;
    width: auto;
`
    //
    // ${media.md`
    //     height: 120px;
    //     margin: 0 8px;
    // `};

// ${props => props.minHeight && css`
    //     ${S.size.minHeight(props.minHeight)};
    // `}
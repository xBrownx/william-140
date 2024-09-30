import styled, {css} from "styled-components";
import { Style as S, Media as M } from '../../atoms'

export const Wrapper = styled.div`
    ${S.flex.row};
    width: max-content;
    height: 100%;
    gap: 40px;
    ${S.size.height(300)};
    max-width: unset !important;

    ${M.md`
        height: 120px;
        overflow: hidden;
        gap: 16px;
    `};
`


export const ImgContainer = styled.div`
    height: 100%;
    object-fit: cover;
`

export const StyledImg = styled.img`
    object-fit: cover;
    height: 100%;
    width: auto;
    ${S.borderRadius};
`
    //
    // ${media.md`
    //     height: 120px;
    //     margin: 0 8px;
    // `};

// ${props => props.minHeight && css`
    //     ${S.size.minHeight(props.minHeight)};
    // `}
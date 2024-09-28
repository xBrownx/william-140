import styled from 'styled-components';
import { Style as S } from '../../atoms';
export const Container = styled.div`
    width: 100%;
    ${S.padding.inlineBlock({block: 64})};
`

export const CarouselWrapper = styled.div`
    ${S.padding.inlineBlock({inline: 64})};
    
    img {
        object-fit: cover;
        object-position: center center;
        ${S.size.width(1312)};
        ${S.size.height(737)};
    }
`
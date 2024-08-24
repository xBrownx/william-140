import styled from "styled-components";
import { Style as S } from '../../atoms'
export const Container = styled.div`
    ${S.padding.inlineBlock({inline: 160, block: 90})};
    
    position: relative;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    
`
import styled, { css } from 'styled-components'
import {
    Style as S,
    Colour as C,
    Media as M
} from "../globalStyles/";

export const StyledPage = div.section`
  position: relative;
  display: flex;
  min-width: 100%;
  height: 100%;
  
  ${props => props.$fullScreen && css``};
  ${props => props.$bgSecondary && css``};

  ${props => props.$xStart && css`justify-content: start;`};
  ${props => props.$xCentre && css`justify-content: center;`};
  ${props => props.$xEnd && css`justify-content: end;`};

  ${props => props.$yStart && css`align-items: start;`};
  ${props => props.$yCentre && css`align-items: center;`};
  ${props => props.$yEnd && css`align-items: end;`};

 
`

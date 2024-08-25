import styled from "styled-components";
import { pxToViewHeight, pxToViewWidth } from "../../atoms/globalStyles";
import { Style as S } from '../../atoms'

export const Wrapper = styled.div`
    position: absolute;
    margin-left: ${props => pxToViewWidth(props.left - 1)}vw;
    margin-top: ${props => pxToViewHeight(props.top + 1)}vh;
    ${S.flex.row};
    ${S.gap.width(20)};
    align-items: end;
`
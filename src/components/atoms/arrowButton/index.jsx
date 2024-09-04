import {Wrapper, StyledButton} from "./styles";
import {ReactComponent as Arrow } from '../../../assets/icons/Down-Arrow.svg'
import { memo } from "react";

export const ArrowButton = memo(function ArrowButton(props) {
  return (
      <Wrapper {...props}>
        <StyledButton {...props}>
          <Arrow />
        </StyledButton>
      </Wrapper>
  );
});
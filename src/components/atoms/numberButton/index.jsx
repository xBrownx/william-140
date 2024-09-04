import { Container, Wrapper } from './styles'
import { memo } from "react";

export const NumberButton = memo(function NumberButton(props) {
    return (
        <Container
            onMouseEnter={props.hoverStart}
            onMouseLeave={props.hoverEnd}
            {...props}
        >
            <Wrapper {...props}>
                {props.children}
            </Wrapper>
        </Container>
    );
});
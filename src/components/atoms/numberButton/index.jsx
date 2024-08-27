import {Container, Wrapper} from './styles'

export const NumberButton = props => {
    return (
        <Container
            onMouseEnter={props.hoverStart}
            onMouseLeave={props.hoverEnd}
            {...props}
        >
            <Wrapper {...props}>{props.children}</Wrapper>
        </Container>
    );
}
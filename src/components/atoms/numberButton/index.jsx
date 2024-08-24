import {Container, Wrapper} from './styles'

export const NumberButton = props => {
    return (
        <Container {...props}>
            <Wrapper {...props}>{props.children}</Wrapper>
        </Container>
    );
}
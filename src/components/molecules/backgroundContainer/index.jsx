import * as Styled from './styles'
import {Container, InnerContainer} from "./styles";


export const BackgroundContainer = props => {
    return (
        <Container {...props}>
            <InnerContainer>
                {props.children}
            </InnerContainer>
        </Container>
    );
}
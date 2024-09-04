import {Container, InnerContainer} from "./styles";
import { memo } from "react";

export const BackgroundContainer = memo(function BackgroundContainer(props) {
    return (
        <Container {...props}>
            <InnerContainer>
                {props.children}
            </InnerContainer>
        </Container>
    );
});
import {ImageContainer, StyledImage} from "./styles";
import { memo } from "react";

export const Image = memo(function Image(props) {
    return (
        <ImageContainer {...props}>
            <StyledImage {...props} />;
        </ImageContainer>
    );
});
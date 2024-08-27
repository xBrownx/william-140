import {ImageContainer, StyledImage} from "./styles";

export const Image = props => {
    return (
        <ImageContainer {...props}>
            <StyledImage {...props} />;
        </ImageContainer>
    );
}
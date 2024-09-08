import { memo } from "react";

import { ImgContainer, StyledImg, Wrapper } from "./styles";

export const LifestyleImages = memo(
    function LifestyleImages(props) {
        const images = props.assets.carousel;
        return (
            <Wrapper>
                {
                    images.map((image) => {
                        return (
                            <ImgContainer key={image.key}>
                                <StyledImg {...image} />
                            </ImgContainer>
                        );
                    })
                }
            </Wrapper>
        );
    }
);
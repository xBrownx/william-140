import { memo } from "react";
import { lifestyle } from "../../../constants";
import { ImgContainer, StyledImg, Wrapper } from "./styles";

export const LifestyleImages = memo(
    function LifestyleImages() {
        const images = lifestyle.assets.carousel;
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
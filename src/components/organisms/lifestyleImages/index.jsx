import {lifestyle} from "../../../constants";
import {ImgContainer, StyledImg, Wrapper} from "./styles";

export const LifestyleImages = props => {
    const images = lifestyle.assets.carousel;
    return (
        <Wrapper>
            {
                images.map((image) => {
                    return (
                        <ImgContainer key={image.key}>
                            <StyledImg {...image}/>
                        </ImgContainer>
                    );
                })
            }
        </Wrapper>
    );
}
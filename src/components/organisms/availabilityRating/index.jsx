import { memo } from 'react';
import { Column } from "../../molecules";
import { Image, Paragraph } from "../../atoms";
import { Wrapper } from "./styles";

export const AvailabilityRating = memo(
    function AvailabilityRating(props) {
        const ratingOne = props.assets.icons.ratingOne;
        const ratingTwo = props.assets.icons.ratingTwo;
        return (
            <Column padding={{left: 64}}>
                <Wrapper>
                    <Image {...ratingOne} />
                    <Paragraph $variant>
                        NABERS Energy Rating
                    </Paragraph>
                </Wrapper>
                <Wrapper>
                    <Image {...ratingTwo}/>
                    <Paragraph $variant>
                        NABERS Water Rating
                    </Paragraph>
                </Wrapper>
            </Column>
        );
    }
);
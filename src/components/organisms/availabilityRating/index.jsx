import { memo } from 'react';
import { Column } from "../../molecules";
import { Paragraph } from "../../atoms";
import { Wrapper } from "./styles";

export const AvailabilityRating = memo(
    function AvailabilityRating(props) {
        const RatingOne = props.assets.icons.ratingOne;
        const RatingTwo = props.assets.icons.ratingTwo;
        return (
            <Column padding={{left: 64}}>
                <Wrapper>
                    <RatingOne.src {...RatingOne} />
                    <Paragraph $variant>
                        NABERS Energy Rating
                    </Paragraph>
                </Wrapper>
                <Wrapper>
                    <RatingTwo.src {...RatingTwo} />
                    <Paragraph $variant>
                        NABERS Water Rating
                    </Paragraph>
                </Wrapper>
            </Column>
        );
    }
);
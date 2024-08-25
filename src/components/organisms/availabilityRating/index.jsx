import {ReactComponent as RatingOne} from '../../../assets/svg/rating_1.svg'
import {ReactComponent as RatingTwo} from '../../../assets/svg/rating_2.svg'
import {Column} from "../../molecules";
import {Paragraph} from "../../atoms";
import {Wrapper} from "./styles";

export const AvailabilityRating = props => {
    return (
        <Column padding={{left: 64}}>
            <Wrapper>
                <RatingOne/>
                <Paragraph $variant>NABERS Energy Rating</Paragraph>
            </Wrapper>
            <Wrapper>
                <RatingTwo/>
                <Paragraph $variant>NABERS Water Rating</Paragraph>
            </Wrapper>
        </Column>
    );
}
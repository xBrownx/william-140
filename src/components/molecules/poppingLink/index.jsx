import * as S from './styles'
import {AnimatedLink} from "./styles";
import {Paragraph} from "../../atoms";

export const PoppingLink = props => {
    return (
        <AnimatedLink>
            <Paragraph $secondary size={16}>
                {props.children}
            </Paragraph>
        </AnimatedLink>
    );
}
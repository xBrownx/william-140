import * as S from './styles'
import { AnimatedLink } from "./styles";
import { Paragraph } from "../../atoms";
import { memo } from "react";

export const PoppingLink = memo(
    function PoppingLink(props) {
        return (
            <AnimatedLink>
                <Paragraph $secondary size={16}>
                    {props.children}
                </Paragraph>
            </AnimatedLink>
        );
    }
);
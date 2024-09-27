import * as S from './styles'
import { AnimatedLink } from "./styles";
import { Paragraph } from "../../atoms";
import { memo } from "react";

export const PoppingLink = memo(
    function PoppingLink(props) {
        return (
            <AnimatedLink
                $active={props.currentShot === props.shotIdx}
                onClick={() => props.setShotChange(props.shotIdx)}
                {...props}
            >
                <Paragraph $secondary size={16}>
                    {props.children}
                </Paragraph>
            </AnimatedLink>
        );
    }
);
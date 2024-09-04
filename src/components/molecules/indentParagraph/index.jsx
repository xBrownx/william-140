import * as S from './styles'
import { Paragraph } from '../../atoms'
import { SlideUpAnim } from "../slideUpAnim";
import { memo } from "react";

export const IndentParagraph = memo(
    function IndentParagraph(props) {
        return (
            <S.Wrapper {...props}>
                <SlideUpAnim>
                    <Paragraph {...props}>
                        {props.children}
                    </Paragraph>
                </SlideUpAnim>
            </S.Wrapper>
        );
    }
);

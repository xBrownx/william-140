import * as S from './styles'
import { Paragraph } from '../../atoms'
import { SlideUpAnim } from "../slideUpAnim";

export const IndentParagraph = props => {
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

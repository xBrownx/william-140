import * as S from './styles'
import { Paragraph } from '../atoms'

export const IndentParagraph = props => {
  return (
    <S.Wrapper {...props}>
      <Paragraph {...props}>
        {props.children}
      </Paragraph>
    </S.Wrapper>
  );
}

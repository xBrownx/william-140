import * as S from './styles'
import {IconLink} from "../../molecules";
import { Paragraph } from '../../atoms'
export const AmenitiesList = props => {
    const items = props.items;
    return (
        <S.StyledUl>
            {items.map(item => {
                return (
                    <>
                        {item.Icon &&
                            <S.StyledLi key={item.name}>
                                <IconLink Icon={item.Icon}>
                                    <Paragraph $secondary $size16>{item.txt}</Paragraph>
                                </IconLink>
                            </S.StyledLi>
                        }
                    </>
                );
            })}
        </S.StyledUl>
    );
}

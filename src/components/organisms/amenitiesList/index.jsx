import * as S from './styles'
import {IconLink} from "../../molecules";

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
                                    {item.txt}
                                </IconLink>
                            </S.StyledLi>
                        }
                    </>
                );
            })}
        </S.StyledUl>
    );
}

import * as S from './styles'
import {IconLink} from "../../molecules";
import {Paragraph} from '../../atoms'
import {amenities} from '../../../constants'

export const AmenitiesList = props => {
    const menuItems = amenities.menuItems;
    const icons = amenities.assets.icons;


    return (
        <S.StyledUl>
            {menuItems.map((item, idx) => {
                return (
                    <S.StyledLi key={item.txt}>
                        <IconLink Icon={icons[idx].src} idx={idx}>
                            <Paragraph $secondary $size16>{item.txt}</Paragraph>
                        </IconLink>
                    </S.StyledLi>


                );
            })}
        </S.StyledUl>
    );
}

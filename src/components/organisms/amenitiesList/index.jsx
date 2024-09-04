import { memo } from 'react'
import { amenities } from '../../../constants'
import { Paragraph } from '../../atoms'
import { IconLink } from "../../molecules";
import { StyledLi, StyledUl } from "./styles";

export const AmenitiesList = memo(
    function AmenitiesList(props) {
        const menuItems = amenities.menuItems;
        const icons = amenities.assets.icons;
        return (
            <StyledUl>
                {menuItems.map((item, idx) => {
                    return (
                        <StyledLi key={item.txt}>
                            <IconLink Icon={icons[idx].src} idx={idx}>
                                <Paragraph $secondary $size16>
                                    {item.txt}
                                </Paragraph>
                            </IconLink>
                        </StyledLi>
                    );
                })}
            </StyledUl>
        );
    }
);

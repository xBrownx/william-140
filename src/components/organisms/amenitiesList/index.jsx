import { memo } from 'react'

import { constants as CONST } from './constants'
import { Paragraph } from '../../atoms'
import { IconLink } from "../../molecules";
import { StyledLi, StyledUl } from "./styles";


export function AmenitiesList() {
    const menuItems = CONST.menuItems;
    return (
        <StyledUl>
            {menuItems.map((item, idx) => {
                return (
                    <StyledLi key={item.key}>
                        <IconLink iconSrc={item.iconSrc} idx={idx}>
                            <Paragraph $secondary $size16>
                                {item.title}
                            </Paragraph>
                        </IconLink>
                    </StyledLi>
                );
            })}
        </StyledUl>
    );
}

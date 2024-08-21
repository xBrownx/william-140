import styled, { css } from 'styled-components'
import {Font as F} from '../globalStyles/Font'
import {Style as S} from '../globalStyles/Style'
import {Colour as C} from '../globalStyles/Colour'

export const StyledParagraph = styled.p`
    ${F.family.secondaryLight};
    ${F.size._18px};
    ${C.font.paragraphPrimary};
        
    ${props => props.$secondary && css`
        ${C.font.paragraphSecondary};
    `}
`


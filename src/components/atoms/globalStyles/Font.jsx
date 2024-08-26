import {css} from "styled-components";
import * as Calcs from './DimensionCalcs'

export const Font = {
    size: Calcs.fontSize,
    lineHeight: Calcs.height,
    family: {
        primaryLight: css`font-family: 'TWKEverett-Light', serif;`,
        primaryRegular: css`font-family: 'TWKEverett-Regular', serif;`,
        primaryBold: css`font-family: 'TWKEverett-Bold', serif;`,
        secondaryLight: css`font-family: 'SuisseIntl-Light', serif;`,
        secondaryRegular: css`font-family: 'SuisseIntl-Regular', serif;`,
        secondaryBold: css`font-family: 'SuisseIntl-Bold', serif;`
    }
};

import {css} from "styled-components";

const device = {
    xs: '400px', // for small screen mobile
    sm: '600px', // for mobile screen
    md: '900px', // for tablets
    lg: '1280px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1920px', // for big screens
    xxxl: '2134px',
    xxxxl: '2845px'
}

export const Media = {
    xs: (...args) => css`
        @media (max-width: ${device.xs}) {
            ${css(...args)};
        }
    `,
    sm: (...args) => css`
        @media (max-width: ${device.sm}) {
            ${css(...args)};
        }
    `,
    md: (...args) => css`
        @media (max-width: ${device.md}) {
            ${css(...args)};
        }
    `,
    mdMin: (...args) => css`
        @media (min-width: ${device.md}) {
            ${css(...args)};
        }
    `,
    lg: (...args) => css`
        @media (max-width: ${device.lg}) {
            ${css(...args)};
        }
    `,
    xl: (...args) => css`
        @media (max-width: ${device.xl}) {
            ${css(...args)};
        }
    `,
    xxl: (...args) => css`
        @media (max-width: ${device.xxl}) {
            ${css(...args)};
        }
    `,
    xxxl: (...args) => css`
        @media (max-width: ${device.xxxl}) {
            ${css(...args)};
        }
    `,
    xxxxl: (...args) => css`
        @media (max-width: ${device.xxxxl}) {
            ${css(...args)};
        }
    `,
}

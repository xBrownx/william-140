import { css } from 'styled-components';
import * as Calc from "./DimensionCalcs";
import { Colour as C } from "./Colour";

export const Style = {}

Style.background = {
    primary: css`background-color: ${C.background.primary};`,
}

Style.borderRadius = css`border-radius: 0.278vw;`

Style.padding = {
    none: css`padding: 0;`,
    __: Calc.padding,
    inlineBlock: Calc.paddingInlineBlock,
    top: Calc.paddingTop,
    right: Calc.paddingRight,
    bottom: Calc.paddingBottom,
    left: Calc.paddingLeft,
    x: Calc.paddingX,
    y: Calc.paddingY,
}

Style.margin = {
    none: css`margin: 0;`,
    __: Calc.margin,
    inlineBlock: Calc.marginInlineBlock,
    top: Calc.marginTop,
    right: Calc.marginRight,
    bottom: Calc.marginBottom,
    left: Calc.marginLeft,
    x: Calc.marginX,
    y: Calc.marginY,
}

Style.gap = {
    width: Calc.gapX,
    height: Calc.gapY
}

Style.flex = {
    column: css`
        display: flex;
        flex-direction: column;
    `,
    row: css`
        display: flex;
        flex-direction: row;
    `,
    centre: css`
        display: flex;
        align-items: center;
        justify-content: center;
    `
}

Style.fullscreen = css`
    width: 100vw;
    height: 100vh;
`

Style.size = {
    width: Calc.width,
    minWidth: Calc.minWidth,
    maxWidth: Calc.maxWidth,
    height: Calc.height,
    minHeight: Calc.minHeight,
    maxHeight: Calc.maxHeight,
    square:Calc.square,
}

Style.square = {
    width: Calc.squareWidth,
    height: Calc.squareHeight,
}



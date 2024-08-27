import {css} from "styled-components";

export const DESIGN = {width: 1440, height: 810};

export const pxToViewWidth = (pxWidth) => {
    return (pxWidth / DESIGN.width) * 100;
}

export const pxToViewHeight = (pxHeight) => {
    return (pxHeight / DESIGN.height) * 100;
}

export const pxToFontSize = (px) => {
    const pt = px * 0.74999943307122;
    return (pt * 1.3333343412075) / DESIGN.width * 100;
}

export const width = (px) => css`width: ${pxToViewWidth(px)}vw;`;
export const minWidth = (px) => css`min-width: ${pxToViewWidth(px)}vw;`;
export const maxWidth = (px) => css`max-width: ${pxToViewWidth(px)}vw;`;
export const height = (px) => css`height: ${pxToViewHeight(px)}vh;`;
export const minHeight = (px) => css`min-height: ${pxToViewHeight(px)}vh;`;
export const maxHeight = (px) => css`max-height: ${pxToViewHeight(px)}vh;`;

export const square = (px) => {
    const sq = Math.min(pxToViewWidth(px), pxToViewHeight(px));

    return css`
        height: 0;
        min-width: ${sq}vw;
        padding-bottom: ${sq}vw;
    `;
}

export const squareTwo = (px) => {
    const sq = Math.min(pxToViewWidth(px), pxToViewHeight(px));

    return css`
        height: ${sq}vw;
        min-width: ${sq}vw;
        padding-bottom: ${sq}vw;
    `;
}


export const squareWidth = (px) => css`width: ${pxToViewWidth(px)}vw; height: ${pxToViewWidth(px)}vw;`;
export const squareHeight = (px) => css`width: ${pxToViewHeight(px)}vh; height: ${pxToViewHeight(px)}vh;`;

export const padding = ({top=0, right=0, bottom=0, left=0}) => {
    return (
        css`
            padding: 
                ${pxToViewHeight(top)}vh
                ${pxToViewWidth(right)}vw
                ${pxToViewHeight(bottom)}vh
                ${pxToViewWidth(left)}vw;`
    );
}

export const paddingInlineBlock = ({inline=0, block=0}) => {
    return(
        css`
            padding-inline: ${pxToViewWidth(inline)}vw;
            padding-block: ${pxToViewHeight(block)}vh;
        `);
}

export const margin = ({top=0, right=0, bottom=0, left=0}) => {
    return (
        css`
            margin: 
                ${pxToViewWidth(top)}vw 
                ${pxToViewWidth(right)}vw
                ${pxToViewHeight(bottom)}vh
                ${pxToViewWidth(left)}vw;`
    );
}

export const marginInlineBlock = ({inline=0, block=0}) => {
    return (
        css`
            margin-inline: ${pxToViewWidth(inline)}vw;
            margin-block: ${pxToViewHeight(block)}vh;
        `
    );
}



export const paddingTop = (px) => css`padding: ${pxToViewHeight(px)}vh 0 0 0;`;
export const paddingRight = (px) => css`padding: 0 ${pxToViewWidth(px)}vw 0 0;`;
export const paddingBottom = (px) => css`padding: 0 0 ${pxToViewHeight(px)}vh 0;`
export const paddingLeft = (px) => css`padding: 0 0 0 ${pxToViewWidth(px)}vh;`;
export const paddingX = (px) => css`padding-inline:${pxToViewWidth(px)}vw;`;
export const paddingY = (px) => css`padding-block:${pxToViewWidth(px)}vh;`;

export const marginTop = (px) => css`margin: ${pxToViewHeight(px)}vh 0 0 0;`;
export const marginRight = (px) => css`margin: 0 ${pxToViewWidth(px)}vw 0 0;`;
export const marginBottom = (px) => css`margin: 0 0 ${pxToViewHeight(px)}vh 0;`
export const marginLeft = (px) => css`margin: 0 0 0 ${pxToViewWidth(px)}vh;`;
export const marginX = (px) => css`margin-inline:${pxToViewWidth(px)}vw;`;
export const marginY = (px) => css`margin-block:${pxToViewWidth(px)}vh;`;

export const gapX = (px) => css`gap:${pxToViewWidth(px)}vw;`;
export const gapY = (px) => css`gap:${pxToViewHeight(px)}vh;`;

export const fontSize = (px) => css`font-size: ${pxToFontSize(px)}vw;`;

export const position = ({top='unset', right='unset', bottom='unset', left='unset'}) => {
    return css`
        top: ${top};
        right: ${right};
        bottom: ${bottom};
        left: ${left};
    `
}
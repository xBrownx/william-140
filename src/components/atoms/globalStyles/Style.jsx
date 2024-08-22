import {css} from 'styled-components';

const DESIGN ={width: 1440, height: 856};

const pxToVw = (pxWidth) => 
    return (pxWidth / DESIGN.width) * 100;
}

const pxToVh = (pxHeight) => 
    return (pxHeight / DESIGN.height) * 100;
}

export const Style = {}

const px = {
    width: {
        _8: 0.556,
        _16:,
        _32:,
        _48:,
        _160:,
    },
    height: {
        _8:,
        _16:,
        _24:,
        _32:,
        _40:,
        _48:,
        _56:,
        _64:,
        _72:,
        _80:,
        _88:,
        _96:,
        _104:,
        _112:,
        _120:,
        _128:,
        _136:,
    },
}

Style.borderRadius = css`
    border-radius: 0.278vw;
`

Style.padding = {
    none: css`padding: 0;`,
    top: {
        
    },
    bottom: {
        
    },
    left: {
        
    },
    right: {
        
    },
    x: {
        __8px: css`padding-inline: ${pxToVw(8)}vw}`,
        _8px: css`padding-inline: 0.556vw;`,
        _16px: css`padding-inline: 1.111vw;`,
        _32px: css`padding-inline: 2.222vw;`,
        _48px: css`padding-inline: 3.333vw;`,
        _160px: css`padding-inline: 11.111vw;`,
    },
    y: {
        _8px: css`padding-block: 0.889vh;`,
        _16px: css`padding-block: 1.975vh;`,
        _26px: css`padding-block: 3.210vh;`,
        _32px: css`padding-block: 3.951vh;`,
        _38px: css`padding-block: 4.691vh;`,
        _41px: css`padding-block: 5.062vh;`,
        _47px: css`padding-block: 5.802vh;`,
        _55px: css`padding-block: 6.790vh;`,
        _72px: css`padding-block: 8.889vh;`,
        _90px: css`padding-block: 11.111vh;`,
        _100px: css`padding-block: 12.346vh;`,
        _109px: css`padding-block: 13.457vh`,
        _140px: css`padding-block: 17.284vh`,
        _190px: css`padding-block: 23.457vh`,
        _280px: css`padding-block: 34.568vh`,
        _500px: css`padding-block: 61.728vh`,
    },

}

Style.margin = {
    none: css`margin: 0;`,
    top: {
        _8px: css`margin-top: 0.988vh 0 0 0;`,
    },
    right: {
        _8px: css`margin: 0 0.988vh 0 0;`,
    },
    bottom: {
        _8px: css`margin: 0 0 0.988vh 0;`,
    },
    left: {
        _8px: css`margin: 0 0 0 0.988vh;`,
    },
    x: {

    },
    y: {

    }
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
}

Style.fullscreen = css`
    width: 100vw;
    height: 100vh;
`



import {css} from 'styled-components';

export const Style = {}

Style.borderRadius = css`
    border-radius: 0.278vw;
`

Style.padding = {
    none: css`padding: 0;`,
    top: {},
    bottom: {},
    left: {},
    right: {},
    x: {
        _8px: css`padding-inline: 0.556vw;`,
        _16px: css``,
        _32px: css``,
        _48px: css``,
        _160px: css``,
    },
    y: {
        _8px: css``,
        _16px: css``,
        _26px: css``,
        _23px: css``,
        _38px: css``,
        _41px: css``,
        _47px: css``,
        _55px: css``,
        _72px: css``,
        _90px: css``,
        _100px: css``,
        _109px: css``,
        _140px: css``,
        _190px: css``,
        _280px: css``,
        _500px: css``,
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

Style.width = {
    _8px: '0.556vw',
}

Style.height = {

}


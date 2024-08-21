import styled, {css, keyframes} from "styled-components";

const A.TextButton = styled.button`
    ${GLOBAL_STYLES.borderRadius};
    ${FontFamily.secondaryRegular};
    ${FontSize._18px};
    ${GLOBAL_STYLES.noMargin};
    
    background: transparent;
    border-width: 1px solid;
    border-color: ${props => props.$secondary ? "#164A49" : "#FFF" };
    padding: 0.5em 1.5em;
    overflow: hidden;
    color: ${props => props.$secondary ? "#164A49" : "#FFF" };
    position: relative;
    width: fit-content;
    z-index: 1;

    &:hover {
        cursor: pointer;
        color: #FFF;
    }

    &::after {
        content: "";
        background: #164A49;
        position: absolute;
        z-index: -1;
        padding: 0.5em 1.5em;
        display: block;
        transition: all 0.35s;
        left: 0;
        right: 0;
        top: -100%;
        bottom: 100%;
    }

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    }
  `

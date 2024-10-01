import styled, { css } from 'styled-components';
import {Style as S, Media as M } from '../../atoms'
export const CustomContainer = styled.div`
    position: relative;
    width: ${S.width(576)};
    
    ${M.md`
        width: 100%;
    `};
`

export const CustomButton = styled.button`
    font-size: ${S.fontSize(18)};
    ${S.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'SuisseIntl-Regular', serif;
    margin: 0;
    background-color: white;
    border-width: 1px;
    border-style: solid;

    padding: 0.5em 1.5em;
    overflow: hidden;
    position: relative;
    z-index: 1;
    
    color: black;
    border-color: white;
        
    transition: all 200ms ease-in-out;
    width: 100%;
    
    &:hover {
        cursor: pointer;
        color: #FFF;
    };

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
    };

    &:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
    };
    
    ${M.md`
        border-radius: 3px;
        height: 50px;
        font-size: 14px;
        line-height: 18.16px;
        padding: 0;
       
    `};
`
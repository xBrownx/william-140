import styled, { css } from 'styled-components';

export const Container = styled.div`
    padding-top: 46px;
    padding-inline: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

export const CustomHeading = styled.h2`
    font-size: 14px;
    line-height: 18.16px;
    color: #162425B2;
    font-family: 'SuisseIntl-Regular', serif;
`

export const CustomRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`

export const CustomButton = styled.div`
    display: flex;
    border-radius: 3px;
    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
  
    ${props => props.$active && css`
        background-color: #164A49;
        border: 1px solid #164A49;
    `}
    
    ${props => props.$visible && css`
        visibility: unset;
        display: flex;
    `}
    
    
        font-family: 'SuisseIntl-Light', serif;
        font-size: 16px;
        color: white;
        font-weight: 700;
        ${props => props.$active && css`
            color: white;
        `}
    
`
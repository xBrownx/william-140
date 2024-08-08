import styled from "styled-components";
import background from "./assets/HomeBackground.jpeg"

export const Background = styled.div`
    position: relative;
    box-sizing: border-box;
    display: flex;
    background: url(${background}) no-repeat 50% 75%;
    background-size: cover;
    height: 100%;
    width: 100%;
`

export const BackgroundContainer = styled.div`
    position: absolute;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 91px 91px;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 50px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`


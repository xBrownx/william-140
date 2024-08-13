import styled from "styled-components";

export const SplitScreen = styled.div`
    padding: 0 var(--width-160px);
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    box-sizing: border-box;

    @media only screen and (max-width: 750px) {
        flex-direction: column;
        padding: 16px;
    }
`

export const AmenitiesLeftContainer = styled.div`
    flex: 1;
    min-width: 50%;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
`

export const AmenitiesRightContainer = styled.div`
    flex: 1;
    display: flex;
    min-width: 50%;
    justify-content: center;
    height: 100%;
`

export const ImgContainer = styled.div`
    max-width: 37.778vw;
    max-height: 100vh;
    overflow: hidden;
`
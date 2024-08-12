import styled from "styled-components";

export const SplitScreen = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    max-width: 100%;
    display: flex;
    flex-direction: row;
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
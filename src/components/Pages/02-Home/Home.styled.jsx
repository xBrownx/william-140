import styled from "styled-components";

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 8.889vh 7.847vw 8.889vh 11.111vw;
    box-sizing: border-box;
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`

export const ImgWrapper = styled.div`
    display: flex;
    width: 31.042vw;
    height: 82.222vh;
    max-width: 31.042vw;
    max-height: 82.222vh;
    overflow: hidden;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.11vw;
    gap: var(--height-32px);
`

export const StyledH1 = styled.h1`
    font-family: "SuisseIntl-Bold", serif;
    font-size: var(--font-size-16px);
    font-weight: 700;
    color: var(--color-primary-5);
    margin: 0;
    padding: 0;
`

export const StyledP = styled.p`
    font-family: "SuisseIntl-Light", serif;
    font-size: var(--font-size-36px);
    line-height: var(--line-height-36px);
    font-weight: 400;
    color: #164A49;
    opacity: 0.7;
    padding: 0;
    margin: 0;
`





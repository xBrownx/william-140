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
    width: 100%;
    height: 100%;
    justify-content: center;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.11vw;
`

export const StyledH1 = styled.h1`
    font-family: "SuisseIntl-Bold", serif;
    font-weight: 700;
    color: #164A49;
    font-size: 1.975vh;
    margin: 0 0 1vh 0;
    padding: 0;
`

export const StyledP = styled.p`
    font-family: "SuisseIntl-Light", serif;
    font-weight: 300;
    color: #164A49;
    font-size: 4.444vh;
    line-height: 5.764vh;
    padding: 0;
    margin: 0 0  3.951vh 0;
`

export const StyledButton = styled.div`
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'SuisseIntl-Light', serif;
    width: 15vw;
    height: 6.79vh;
    color: #164A49;
    border: 1px solid #164A49;
    font-size: 2.222vh;
    font-weight: 400;

    &:hover {
        cursor: pointer;
    }
`





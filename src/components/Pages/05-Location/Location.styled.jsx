import styled from "styled-components";


export const LocationContainer = styled.div`
    margin: 23.704vh 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
`

export const LocationContent = styled.div`
    padding: 0 11.111vw;
    display: flex;
    flex-direction: row;
    gap: 2.22 2vw;
`

export const LocationTitle = styled.span`
    display: flex;
    flex-direction: column;
    width: 44.444vw;
`

export const LocationParagraphWrapper = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    border-left: 1px solid #164A49;
    margin: 0 0 0 0;
    padding: 0 0 0 2.222vw;
`

export const LocationParagraph = styled.p`
    margin: 0;
    padding: 0;
    opacity: 0.7;
    color: #164A49;
    font-size: 2.222vh;
    font-family: 'SuisseIntl-Light', serif;
    line-height: 2.883vh;
`

export const CarouselContainer = styled.div`
    margin: var(--height-32px) 0 0 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
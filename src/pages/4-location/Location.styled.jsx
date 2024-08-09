import styled from "styled-components";


export const LocationContainer = styled.div`
    margin: 23.704vh 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 3.951vh;
`

export const LocationContent = styled.div`
    padding: 0 11.111vw;
    display: flex;
    flex-direction: row;
    gap: 2.222vw;
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

export const SwiperContainer = styled.div`
    display: flex;
    padding: 0 91px;
    margin: 0 0 20px 0;
    overflow: hidden;
    
    div { // swiper
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        
        div { //swiper wrapper
            display: flex;
            width: 100%;
            
            div { // swiper slide
                display: flex;
                align-items: center;

                div { // img wrapper
                    height: 100%;
                    width: 100%;

                    svg {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
`
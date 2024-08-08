import styled from "styled-components";


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
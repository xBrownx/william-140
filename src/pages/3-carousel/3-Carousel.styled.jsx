import styled from "styled-components";

export const SwiperContainer = styled.div`
    width: 100%;

    div { // swiper
        height: 40vh;
        
        div {
            display: flex;
            align-items: center;
            background: var(--secondary-bg-colour);

            div {
                width: fit-content !important;
                justify-content: center;
                align-items: center;
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: block;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;

                //-webkit-touch-callout: none; /* iOS Safari */
                //-webkit-user-select: none; /* Safari */
                //-moz-user-select: none; /* Old versions of Firefox */
                //-ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none;
                object-fit: contain;
                margin: 15px;

                img {
                    object-fit: cover;
                    height: 100%;
                }
            }
        }
    }
`
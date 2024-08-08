import styled from "styled-components";


export const StyledImg = styled.img`
    object-fit: cover;
    height: 100%;
    margin: 0 20px 0 20px;
`

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
`

export const CarouselList = styled.div`
    display: flex;
    justify-content: center;
    width: fit-content;
`

export const ImgContainer = styled.div`
    display: flex;
    width: max-content;

    animation: slideAnimation 8s linear infinite;

    @keyframes slideAnimation {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`
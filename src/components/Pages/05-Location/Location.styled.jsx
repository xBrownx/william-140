import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-self: end;
    
    @media only screen and (max-width: 750px) {
        height: auto;
    }
`

export const CarouselContainer = styled.div`
    margin: var(--height-32px) 0 0 0;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    @media only screen and (max-width: 750px) {
        background-color: red;
        margin: 0;
    }
`
import styled, {css} from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.0);
    z-index: 1000;

    animation: fadeIn 500ms;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export const Modal = styled.div`
    pointer-events: none;
    transition: opacity 2000ms ease-in-out;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 64.444vw;
    height: 70.988vh;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    flex-direction: column;
    border-radius: 50px;

    ${props => props.$open && css`
        opacity: 1;
        pointer-events: visible;
    `};
    
    animation: fadeIn 500ms;
    
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    //filter: blur(8px);
    //-webkit-filter: blur(8px);

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export const ModalTitleContainer = styled.div`
    padding: 4.444vh 0 0 4.444vw;
`

export const ModalBgImg = styled.img`
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
`


export const CloseWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 2.963vh 1.667vw;

    &:hover {
        cursor: pointer;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    padding: 0 0 1.975vh 0;
    box-sizing: border-box;
    overflow: hidden;
    align-items: center;
    justify-content: center;
`



export const TextContainer = styled.div`
    flex: 1;
    padding: 0 4.444vw 0 0;
`
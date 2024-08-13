import video from "../../../assets/vid/10-History.mp4";
import React, {useRef, useState} from "react";
import styled from "styled-components";
import placeholder from "../../../assets/img/10-History-Placeholder.png"
import {motion} from "framer-motion";

export const HistoryVideo = () => {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = (isPlay) => {
        isPlay ? videoRef.current.play() : videoRef.current.pause();
        setIsPlaying(!isPlaying);
    }

    return (
        <Container id="video-container">
            <Wrapper id="video-wrapper">
                <StyledVideo ref={videoRef} $isVisible={isPlaying} loop muted controls={false}>
                    <source src={video} type="video/mp4"/>
                </StyledVideo>
                <StyledImg $isVisible={!isPlaying} src={placeholder} alt="placeholder"/>
                <StyledButton
                    onClick={() => handlePlay(!isPlaying)}
                    $isVisible={!isPlaying}
                >
                    Play
                </StyledButton>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    max-width: 100vw;
    overflow: hidden;
`

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    margin-inline: auto;
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: var(--height-32px) var(--width-160px) 0 var(--width-160px);
    box-sizing: border-box;
    border-radius: 4px;
`

const StyledVideo = styled.video`
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    opacity: ${props => props.$isVisible ? 1 : 0};
`

const StyledImg = styled.img`
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    opacity: ${props => props.$isVisible ? 1 : 0};
`

const StyledButton = styled.div`
    z-index: 2;
    grid-row: 1;
    grid-column: 1;
    width: 116px;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 5px;
    color: white;
    opacity: ${props => props.$isVisible ? 1 : 0};
    
    &:hover {
        cursor: pointer;
    }
`
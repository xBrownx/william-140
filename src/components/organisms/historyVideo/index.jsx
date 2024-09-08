import React, { useRef, useState, memo } from "react";
import { Container } from "../../molecules";
import { StyledButton, StyledImg, StyledVideo } from "./styles";


export const HistoryVideo = memo(
    function HistoryVideo(props) {

        const assets = props.assets;
        const videoRef = useRef();
        const [isPlaying, setIsPlaying] = useState(false);

        const handlePlay = (isPlay) => {
            isPlay ? videoRef.current.play() : videoRef.current.pause();
            setIsPlaying(!isPlaying);
        }

        return (
            <Container $gridCentre paddingInlineBlock={{inline: 160, block: 32}} $borderRadius $overflowHidden>
                <StyledVideo ref={videoRef} $isVisible={isPlaying} loop muted controls={false}>
                    <source src={assets.video.src} type="video/mp4" />
                </StyledVideo>
                <StyledImg $isVisible={!isPlaying} {...assets.placeholder} />
                <StyledButton
                    onClick={() => handlePlay(!isPlaying)}
                    $isPlaying={isPlaying}
                    $isVisible={!isPlaying}
                >
                    {isPlaying ? "Pause" : "Play"}
                </StyledButton>
            </Container>
        );
    }
);

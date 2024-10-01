import React, { useRef, useState, memo } from "react";
import { Container } from "../../molecules";
import { ButtonWrapper, CustomContainer, CustomButton, StyledImg, StyledVideo } from "./styles";
import { Button } from "../../atoms";


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
            <CustomContainer>
                <StyledVideo ref={videoRef} $isVisible={isPlaying} loop muted controls={true}>
                    <source src={assets.video.src} type="video/mp4" />
                </StyledVideo>
                <StyledImg $isVisible={!isPlaying} {...assets.placeholder} />
                <ButtonWrapper
                    $isPlaying={isPlaying}
                    $isVisible={!isPlaying}
                >
                    <CustomButton
                        $square
                        $secondary
                        onClick={() => handlePlay(!isPlaying)}
                    >
                        {isPlaying ? "pause" : "play"}
                    </CustomButton>
                </ButtonWrapper>
            </CustomContainer>
        );
    }
);

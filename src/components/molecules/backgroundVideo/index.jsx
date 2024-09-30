import React, { useEffect, useRef, memo } from "react";
import { Container, StyledHeading, StyledVideo, Wrapper } from "./styles";
import { LandingTitleAnimation } from "../../organisms";
import { Line } from "../../organisms/landingTitleAnimation/line";
import { LandingTitle } from "../../atoms";

export const BackgroundVideo = memo(function BackgroundVideo(props) {
    const videoRef = useRef(null);


    useEffect(() => {
        let options = {
            rootMargin: "0px",
            threshold: [0.25, 0.75]
        };

        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
    });
    return (
        <Container >
            <Wrapper >
                {props.headings.map((item) => {
                    return (
                        <StyledHeading $justify={item.justify}>
                            {item.title}
                        </StyledHeading>
                    );
                })}
            </Wrapper >
            <StyledVideo
                autoPlay
                loop
                muted
                controls={false}
                ref={videoRef}
            >
                <source src={props.src} type="video/mp4" />
            </StyledVideo >
        </Container >
    );
});
import React, { useEffect, useRef, memo } from "react";
import { Container, StyledVideo } from "./styles";
import { LandingTitleAnimation } from "../../organisms";

export const BackgroundVideo = memo(function BackgroundVideo(props) {
    const videoRef = useRef(null);


    // useEffect(() => {
    //     let options = {
    //         rootMargin: "0px",
    //         threshold: [0.25, 0.75]
    //     };
    //
    //     let handlePlay = (entries, observer) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 videoRef.current.play();
    //             } else {
    //                 videoRef.current.pause();
    //             }
    //         });
    //     };
    //
    //     let observer = new IntersectionObserver(handlePlay, options);
    //
    //     observer.observe(videoRef.current);
    // });
    return (
        <Container>
            <LandingTitleAnimation heading={props.heading}/>
            <StyledVideo autoPlay loop muted controls={false} ref={videoRef}>
                <source src={props.src} type="video/mp4" />
            </StyledVideo>
        </Container>
    );
});
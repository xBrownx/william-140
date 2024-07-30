import {Parallax, ParallaxLayer, ParallaxProps} from '@react-spring/parallax'
import {useEffect, useRef, useState} from "react";
import landing from './assets/img.png'
import {ReactComponent as Logo} from "./assets/Logo.svg";
import {ReactComponent as DownArrow} from "./assets/DownArrow.svg"
import HomePageNavBar from "./components/HomePageNavBar";

function MainParallax() {

    const ref = useRef();

    return (
        <>
            <Parallax
                pages={3}
                ref={ref}
                style={{
                    overflowY: 'hidden',
                }}
            >
                <ParallaxLayer
                    offset={0}
                    // speed={1}
                    // factor={1}
                    style={{
                        width: '100%',
                        backgroundImage: `url(${landing})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '100% 100%',
                        transform: 'scale(1.00)',
                    }}
                    onWheel={
                        (e) => {
                            if(e.deltaY > 0) {
                                console.log(e.deltaY);
                                ref.current.scrollTo(1)
                            }
                        }
                    }
                    //onClick={() => ref.current.scrollTo(1)}
                >
                    <HomePageNavBar />
                    <div style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>

                        <Logo style={{
                            transform: 'scale(1.35)',
                        }}/>
                        <DownArrow
                            style={{
                                position: 'absolute',
                                bottom: '0',
                                marginBottom: '20px'
                            }}
                            onClick={() => ref.current.scrollTo(1)}
                            onScroll
                        />
                    </div>

                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    // speed={1}
                    // factor={1}
                    style={{
                        background: `#162425`
                    }}
                >
                    <h1
                        style={{
                            fontSize: '128px',
                            fontWeight: 300,
                            color: 'white',

                        }}
                    >An Iconic Landmark in Melbourne</h1>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    //speed={1}
                    //factor={1}
                    style={{
                        background: `red`
                    }}
                >
                    <h1>I can see it in your eyes</h1>
                </ParallaxLayer>

            </Parallax>
        </>
    )
}

export default MainParallax;
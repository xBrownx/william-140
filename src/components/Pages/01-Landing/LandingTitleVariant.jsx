import {displayHeading} from "./Landing.constants";
import {Heading138px} from "../../Core/Typography.styled";
import React, {useEffect, useRef} from "react";
import {motion, useAnimation} from "framer-motion";
import {Title} from "./Landing.styled";

const DURATION = 0.25;
const STAGGER = 0.05;

export const LandingTitleVariant = () => {
    return (
        displayHeading.map((item, i) => {
            return (
                <TitleRow key={i} item={item}/>
            )
        })
    );
}

export const TitleRow = ({key, item}) => {
    return (
        <Title key={key}>
            <Heading138px justify={item.justify}>
                <AnimateText item={item} delay={key}>
                    {item.title}
                </AnimateText>
            </Heading138px>
        </Title>
    );
}

const GetText = ({children}) => {
    const characterRef = useRef([]);

    return children.split("").map((item, i) => {
        return (
            <motion.span
                variants={defaultAnimations}
                transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                    delay: STAGGER * i,
                    type: "spring",
                }}
                style={{display: "inline-block"}}
                ref={ref => characterRef.current[i] = ref}
                key={`l_${i}`}
            >
                {item === " " ? <>&nbsp;</> : item}
            </motion.span>
        );
    });

}

const AnimateText = ({item, delay, children}) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("hidden")
        setTimeout(() => {
            controls.start("visible")
        }, 1500 + (delay * 400))
    }, [])
    return (
        <motion.span
            initial="hidden"
            animate={controls}
            transition={{
                staggerChildren: 0.1
            }}
        >
            <GetText>
                {children}
            </GetText>
        </motion.span>
    );
}


const defaultAnimations = {
    hidden: {
        // opacity: 0,
        y: "100%"
    },
    visible: {
        opacity: 1,
        y: 0
    }
}



import React from 'react';
import {motion} from "framer-motion"

const SubTitle = (props) => {
    return (
        <motion.h2
            style={{
                translateX: props.anim.subHeadOffset,
                opacity: props.anim.subHeadFade
            }}>
            {props.subHeading}
        </motion.h2>
    );
}

export function PrimaryTitle(props) {
    return (
        <div className="primary-title-container">
            <div className="primary-title-wrapper">
                <SubTitle
                    subHeading={props.subHeading}
                    anim={props.anim}
                />

                <motion.h1
                    style={{
                        translateX: props.anim.headOneOffset,
                        opacity: props.anim.headOneFade,
                    }}>
                    {props.headOne}
                </motion.h1>

                <motion.h1
                    style={{
                        translateX: props.anim.headTwoOffset,
                        opacity: props.anim.headTwoFade,
                    }}>
                    {props.headTwo}
                </motion.h1>
            </div>
        </div>
    );
}

export function PrimaryTitleVariant(props) {
    return (
        <motion.div
            className="primary-title-variant-container"
            style={{
                // scale: props.anim.headScale,
                // opacity: props.anim.headFade,
            }}
        >
            <div className="primary-title-variant-wrapper">
                <h2>{props.subHeading}</h2>
                <h1>{props.heading}</h1>
            </div>

            <div className="primary-title-variant-content-wrapper">
                {props.children}
            </div>
        </motion.div>
    );
}

export function SecondaryTitle(props) {
    return (
        <motion.div
            className={"secondary-title-container" + (props.variant ? props.variant : "")}
            style={{
                scale: props.anim.headScale,
                opacity: props.anim.headFade,
            }}
        >
            <div className={"secondary-title-wrapper" + (props.variant ? props.variant : "")}>
                <h1>
                    {props.heading}
                </h1>
            </div>
        </motion.div>
    );
}

export function SecondaryTitleVariant(props) {
    return (
        <motion.div
            className="secondary-title-variant-container"
            style={{
                // scale: props.anim.headScale,
                // opacity: props.anim.headFade,
            }}
        >
            <div className="secondary-title-variant-wrapper">
                <h2>{props.subHeading}</h2>
                <h1>{props.heading}</h1>
            </div>
        </motion.div>
    );
}


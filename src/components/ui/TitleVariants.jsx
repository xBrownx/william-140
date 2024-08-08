import React from 'react';
import {motion} from "framer-motion"
import {usePrimaryTitleAnim} from "../../hooks/Anim";
import {ScrollConst} from "../../util/PageRefs";

const SubTitle = (props) => {
    return (
        <motion.h2
            style={{
                translateX: props.anim.subHeadOneOffset,
                opacity: props.anim.subHeadOneFade
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
            {props.children && <div className="primary-content-container">
                <motion.div
                    className="primary-content-wrapper"
                    style={{
                        translateX: props.anim.subHeadTwoOffset,
                        opacity: props.anim.subHeadTwoFade,
                    }}
                >
                    {props.children}

                </motion.div>
            </div>}
        </div>
    );
}


export function PrimaryTitleVariant(props) {

    const anim = usePrimaryTitleAnim(
        props.mainRef,
        props.scrolls,
        [-300, 500, 350, -300]
    )

    return (
        <div className="primary-title-variant-container">
            <div className="primary-title-variant-wrapper">
                <SubTitle
                    subHeading={props.subHeading}
                    anim={anim}
                />

                <motion.h1
                    style={{
                        translateX: anim.headOneOffset,
                        opacity: anim.headOneFade,
                    }}>
                    {props.heading}
                </motion.h1>
            </div>

            {(props.children !== null &&
                <div className="primary-title-variant-content-wrapper">
                    <motion.div style={{
                        translateX: anim.subHeadTwoOffset,
                        opacity: anim.subHeadTwoFade,
                    }}>
                        {props.children}
                    </motion.div>
                </div>
            )}
        </div>
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

    const anim = usePrimaryTitleAnim(
        props.mainRef,
        props.scrolls,
        [-300, -500, 350, -300, 500]
    )

    return (
        <div className="secondary-title-variant-container">
            <div className="secondary-title-variant-wrapper">
                <SubTitle
                    subHeading={props.subHeading}
                    anim={anim}
                />

                <motion.h1
                    style={{
                        translateX: anim.headOneOffset,
                        opacity: anim.headOneFade,
                    }}>
                    {props.heading}
                </motion.h1>
            </div>
        </div>
    );
}


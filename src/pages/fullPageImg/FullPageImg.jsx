import React, {useEffect, useRef} from 'react';
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import styled from "styled-components";
import {ParallaxImg} from "../../components/ui/ParallaxImg";
import {PageSection} from "../../components/styles/SectionContainer.styled";
import {PageContainerStyled} from "../../components/styles/PageContainer.styled";


const FullPageImg = (props) => {
    return (
        <PageSection $secondary>
            <PageContainerStyled $imgPadding>
                <ParallaxImg src={props.src} alt="Full Page Img"/>
            </PageContainerStyled>
        </PageSection>
    );
};

export default FullPageImg;
import {Container, Title} from "./styles";
import {landing} from '../../constants';
import {motion} from "framer-motion";
import {PageTitle} from "../../molecules";
import {LandingTitle} from "../../atoms";

export const LandingTitleAnimation = props => {
    const headings = landing.heading
    return (
        <Container {...props}>
            {
                headings.map((item) => {
                    return (
                        <TitleRow key={item.title} item={item} {...props}/>
                    );
                })
            }
        </Container>
    );
}

const TitleRow = props => {
    const item = props.item;
    return (
        <LandingAnimation
            x={item.x}
            y={item.y}
            delay={item.delay}
            justify={item.justify}
            align={item.align}
        >
            <LandingTitle justify={item.justify} {...props}>
                {item.title}
            </LandingTitle>
        </LandingAnimation>
    );
}

const LandingAnimation = ({x, y, delay, children}) => {
    return (
        <AnimateY y={y} delay={delay}>
            <AnimateX x={x} delay={delay}>
                {children}
            </AnimateX>
        </AnimateY>
    )
}

const AnimateY = ({y, delay, children}) => {
    return (
        <motion.div
            style={{width: "100%"}}
            initial={{y: y}}
            animate={{y: 0}}
            transition={{
                type: "spring",
                duration: 1,
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
}

const AnimateX = ({x, delay, children}) => {
    return (
        <motion.div
            style={{width: "100%"}}
            initial={{x: x}} animate={{x: 0}}
            transition={{
                type: "spring",
                duration: 1.3,
                delay: 1.2 + delay
            }}
        >
            {children}
        </motion.div>
    );
}


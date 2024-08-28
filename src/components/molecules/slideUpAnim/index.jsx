import {motion} from "framer-motion";


export const SlideUpAnim = props => {

    return (
        <motion.div
            as={motion.div}
            initial={{
                y: "100%",
                opacity: 0
            }}
            whileInView={{
                y: 0,
                opacity: 1,
            }}
            viewport={{
                margin: "0px 0px -50px 0px",
                amount: "some"
            }}
            transition={{
                duration: 0.2,
                // ease: "linear"
            }}
        >
            {props.children}
        </motion.div>
    );
}
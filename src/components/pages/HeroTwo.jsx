import { Hero } from "../templates";
import { _heroTwoAssets } from "../../assets/";
import { memo } from "react";

const HeroTwo = memo(
    function HeroTwo(props) {
        return (
            <Hero $bgSecondary img={_heroTwoAssets.hero} {...props} />
        );
    }
);

export default HeroTwo;
import { Hero } from "../templates";
import { _heroThreeAssets } from "../../assets";
import { memo } from 'react';

const HeroThree = memo(
    function HeroThree(props) {
        return (
            <Hero $bgSecondary img={_heroThreeAssets.hero} {...props} />
        );
    }
);

export default HeroThree;
import { Hero } from "../templates";
import { _heroOneAssets } from '../../assets'
import { memo } from 'react'

const HeroOne = memo(
    function HeroOne(props) {
        return (
            <Hero img={_heroOneAssets.hero} {...props} />
        );
    }
);

export default HeroOne;
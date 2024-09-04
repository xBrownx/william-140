import { Hero } from "../templates";
import { _heroThreeAssets } from "../../assets";

const HeroThree = props => {
    return (
        <Hero $bgSecondary img={_heroThreeAssets.hero} {...props}/>
    );
}

export default HeroThree;
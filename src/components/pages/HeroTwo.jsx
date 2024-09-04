import { Hero } from "../templates";
import { _heroTwoAssets } from "../../assets/";

const HeroTwo = props => {
    return (
        <Hero $bgSecondary img={_heroTwoAssets.hero} {...props}/>
    );
}

export default HeroTwo;
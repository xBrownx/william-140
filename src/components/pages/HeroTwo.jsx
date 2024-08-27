import { Hero } from "../templates";
import { _heroTwoAssets } from "../../assets/";

export const HeroTwo = props => {
    return (
        <Hero $bgSecondary img={_heroTwoAssets.hero} {...props}/>
    );
}
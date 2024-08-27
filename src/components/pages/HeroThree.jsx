import { Hero } from "../templates";
import { _heroThreeAssets } from "../../assets";

export const HeroThree = props => {
    return (
        <Hero $bgSecondary img={_heroThreeAssets.hero} {...props}/>
    );
}
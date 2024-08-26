import { Hero } from "../templates";
import { _heroOneAssets } from '../../assets'

export const HeroOne = props => {
    return (
        <Hero img={_heroOneAssets.hero} {...props}/>
    );
}
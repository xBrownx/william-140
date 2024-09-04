import { Hero } from "../templates";
import { _heroOneAssets } from '../../assets'

const HeroOne = props => {
    return (
        <Hero img={_heroOneAssets.hero} {...props}/>
    );
}

export default HeroOne;
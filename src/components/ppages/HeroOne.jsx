import {Hero} from "../templates";
import img from '../../assets/img/03-FullPage-01.png'
export const HeroOne = props => {
    return (
        <Hero src={img} alt="HeroOne" {...props}/>
    );
}
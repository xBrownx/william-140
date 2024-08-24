import {Hero} from "../templates";
import img from '../../assets/img/Full-Page-Img-4.jpeg'
export const HeroThree = props => {
    return (
        <Hero src={img} alt="Hero" {...props}/>
    );
}
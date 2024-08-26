import AmenitiesCarousel00 from '../../assets/img/07-Amenities-00-Default.jpg'
import AmenitiesCarousel01 from '../../assets/img/07-Amenities-01-Concierge.png'
import AmenitiesCarousel02 from '../../assets/img/07-Amenities-02-Flexible.png'
import AmenitiesCarousel03 from '../../assets/img/07-Amenities-03-Multi-Room.png'
import AmenitiesCarousel04 from '../../assets/img/07-Amenities-04-Gym.png'
import AmenitiesCarousel05 from '../../assets/img/07-Amenities-05-Shower.png'
import AmenitiesCarousel06 from '../../assets/img/07-Amenities-06-Parking.png'
import AmenitiesCarousel07 from '../../assets/img/07-Amenities-07-Cafe.png'
import {ReactComponent as AmenitiesIcon01} from '../../assets/icons/07-Amenities-Icon-1.svg'
import {ReactComponent as AmenitiesIcon02} from '../../assets/icons/07-Amenities-Icon-2.svg'
import {ReactComponent as AmenitiesIcon03} from '../../assets/icons/07-Amenities-Icon-3.svg'
import {ReactComponent as AmenitiesIcon04} from '../../assets/icons/07-Amenities-Icon-4.svg'
import {ReactComponent as AmenitiesIcon05} from '../../assets/icons/07-Amenities-Icon-5.svg'
import {ReactComponent as AmenitiesIcon06} from '../../assets/icons/07-Amenities-Icon-6.svg'
import {ReactComponent as AmenitiesIcon07} from '../../assets/icons/07-Amenities-Icon-7.svg'
import {_amenitiesAssets} from "../../assets";

export const amenities = {
  subheadingTxt: "AMENITIES",
  headingTxt: "Elite Services and Amenities",
  menuItems: [
    {name: "default", txt: "Default", Icon: "", src: AmenitiesCarousel00},
    {name: "default", txt: 'Hotel style concierge', Icon: AmenitiesIcon01, src: AmenitiesCarousel01},
    {name: "default", txt: 'Flexible space suitable for short term use', Icon: AmenitiesIcon02, src: AmenitiesCarousel02},
    {name: "default", txt: 'Bookable multi-purpose space', Icon: AmenitiesIcon03, src: AmenitiesCarousel03},
    {name: "default", txt: 'Gym and cardio room', Icon: AmenitiesIcon04, src: AmenitiesCarousel04},
    {name: "default", txt: 'Resort style end of trip facilities', Icon: AmenitiesIcon05, src: AmenitiesCarousel05},
    {name: "default", txt: 'On site car parking', Icon: AmenitiesIcon06, src: AmenitiesCarousel06},
    {name: "default", txt: 'On site cafe', Icon: AmenitiesIcon07, src: AmenitiesCarousel07},
  ],
  assets: _amenitiesAssets
  
}

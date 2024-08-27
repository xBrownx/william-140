import JamesPappas from './svg/Agency-James-Pappas.svg';
import HamishSutherland from './svg/Agency-Hamish-Sutherland.svg';
import GeorginaMurray from './svg/Agency-Georgina-Murray.svg';
import MichaelDarvell from './svg/Agency-Michael-Darvell.svg';
import ShaneBurns from './svg/Agency-Shane-Burns.svg';
import {ReactComponent as Open} from './icons/Open.svg';
import AmenitiesCarousel00 from "./img/Amenities-00-Default.jpg";
export const _agencyAssets = {
    hero: {
        key: "hero",
        src: AmenitiesCarousel00,
        role: "presentation",
        width: 544,
        height: 815,
        lazy: false,
    },
    agents: {
        jamPap: {
            key: "jamPap",
            src: JamesPappas,
            alt: "James Pappas",
            width: 80,
            height: 80,
            lazy: false,
        },
        hamSut: {
            key: "hamSut",
            src: HamishSutherland,
            alt: "Hamish Sutherland",
            width: 80,
            height: 80,
            lazy: false,
        },
        geoMur: {
            key: "geoMur",
            src: GeorginaMurray,
            alt: "Georgina Murray",
            width: 80,
            height: 80,
            lazy: false,
        },
        micDar: {
            key: "micDar",
            src: MichaelDarvell,
            alt: "Michael Darvell",
            width: 80,
            height: 80,
            lazy: false,
        },
        shaBur: {
            key: "shaBur",
            src: ShaneBurns,
            alt: "Shane Burns",
            width: 80,
            height: 80,
            lazy: false,
        },
    },
    icons: {
        open: {
            key: "open",
            src: Open,
            alt: "Open",
            width: 24,
            height: 24,
            lazy: false,
        }
    }
}
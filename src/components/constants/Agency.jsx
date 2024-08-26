import JamPap from "../../assets/svg/Agency-James-Pappas.svg";
import HamSut from "../../assets/svg/Agency-Hamish-Sutherland.svg";
import GeoMur from "../../assets/svg/Agency-Georgina-Murray.svg";
import MicDar from "../../assets/svg/Agency-Michael-Darvell.svg";
import ShaBur from "../../assets/svg/Agency-Shane-Burns.svg";
import {_agencyAssets} from "../../assets";

export const agency = {
    headingTxt: "Agencies",
    paragraphTxt: "If you'd like to inspect this property in person, please" +
        "contact your preferred agent for further info or to arrange" +
        "a private inspection.",
    subheadingTxt: ["KNIGHT FRANK", "COLLIERS"],
    agents: {
        knightFrank: [
            {
                name: "JAMES PAPPAS",
                phone: "+61 419 319 367",
                email: "james.pappas@au.knightfrank.com",
                img: JamPap,
            },
            {
                name: "HAMISH SUTHERLAND",
                phone: "+61 439 033 612",
                email: "hamish.sutherland@au.knightfrank.com",
                img: HamSut
            },
        ],
        colliers: [
            {
                name: "GEORGINA MURRAY",
                phone: "+61 412 232 030",
                email: "georgina.murray@colliers.com",
                img: GeoMur
            },
            {
                name: "MICHAEL DARVELL",
                phone: "+61 401 033 303",
                email: "michael.darvell@colliers.com",
                img: MicDar
            },
            {
                name: "SHANE BURNS",
                phone: "+61 439 035 002",
                email: "shane.burns@colliers.com",
                img: ShaBur
            }
        ],
    },
    assets: _agencyAssets
}

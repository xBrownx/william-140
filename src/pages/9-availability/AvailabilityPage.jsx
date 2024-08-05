import React from 'react';
import './AvailabilityPage.css'
import {ReactComponent as Img} from "../../assets/Group 5339.svg";
import {ReactComponent as Dld} from "../../assets/download.svg";
import Page from "../../components/Page";
import {SecondaryTitleVariant} from "../../components/TitleVariants";
import {useHomeAnim} from "../../hooks/HomeAnim";
import {ScrollConst} from "../../util/PageRefs";

function AvailabilityPage(props) {

    // const anim = useHomeAnim(props.mainRef, ScrollConst.availabilityHead, ScrollConst.homeBody);

    return (
        <Page pageRef={props.pageRef} size={"page-100"}>

            <SecondaryTitleVariant
                mainRef={props.mainRef}
                scrolls={ScrollConst.availabilityHead}
                subHeading={"AVAILABILITY"}
                heading={"Your Future Workplace"}

            />

            <div className="primary-content-container">
                <div className="availability-page-content-wrapper">
                    <table>
                        <thead>
                        <tr className="head">
                            <th></th>
                            <th>TENANCY</th>
                            <th>FLOOR</th>
                            <th>LFA</th>
                            <th>STATUS</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <TableRow
                            tenancy={"Office"}
                            floor={"Ground Floor"}
                            lfa={"1572"}
                            status={"Available"}
                        />
                        <TableRow
                            tenancy={"Office"}
                            floor={"Ground Floor"}
                            lfa={"1572"}
                            status={"Available"}
                        />
                        <TableRow
                            tenancy={"Office"}
                            floor={"Ground Floor"}
                            lfa={"1572"}
                            status={"Available"}
                        />
                        <TableRow
                            tenancy={"Office"}
                            floor={"Ground Floor"}
                            lfa={"1572"}
                            status={"Available"}
                        />
                        </tbody>
                    </table>
                </div>
            </div>
        </Page>
    );
}

const TableRow = (props) => {
    return (
        <tr>
            <td className="td-img"><Img/></td>
            <td className="td-tenancy">{props.tenancy}</td>
            <td className="td-floor">{props.floor}</td>
            <td className="td-lfa">{props.lfa} m<sup>2</sup></td>
            <td className="td-status">{props.status}</td>
            <td className="td-btn">
                <div className="floor-plan-btn"><Dld/>Floor Plan</div>
            </td>
        </tr>
    );
}

export default AvailabilityPage;
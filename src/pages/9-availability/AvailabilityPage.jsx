import React from 'react';
import './AvailabilityPage.css'
import {ReactComponent as Img} from "../../assets/Group 5339.svg";
import {ReactComponent as Dld} from "../../assets/download.svg";
import Page from "../../components/Page";

function AvailabilityPage(props) {
    return (
        <Page pageRef={props.pageRef} size={"single-page"}>

            <div className="availability-page-title-wrapper">
                <h2>AVAILABILITY</h2>
                <h1>Your Future Workplace</h1>
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
import React from 'react';
import '../App.css'
import {motion,} from 'framer-motion'

function Page(props) {
    return (
        <div className={"page-container " + props.size} ref={props.pageRef}>
            <div className="page-wrapper">
                {props.children}
            </div>
        </div>
    );
}

export default Page;
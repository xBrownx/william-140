import React from 'react';
import '../App.css'
import {motion,} from 'framer-motion'

function Page(props) {
    return (
        <div className="page-container" ref={props.pageRef}>
            <div className="page-wrapper" ref={props.pageRef}>
                {props.children}
            </div>
        </div>
    );
}

export default Page;
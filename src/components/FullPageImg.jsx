import React from 'react';

const FullPageImg = (props) => {
    return (
        <section className="full-page-img">
            <div className="page-container">
                <img src={props.src} alt="Full Page Image"/>
            </div>
        </section>
    );
};

export default FullPageImg;
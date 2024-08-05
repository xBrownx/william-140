import React from 'react';

const FullPageImg = (props) => {
    return (
        <section className="full-page-img">
            <img src={props.src} alt="Full Page Image" />
        </section>
    );
};

export default FullPageImg;
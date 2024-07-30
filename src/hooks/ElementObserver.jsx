import React from 'react';

const ElementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
    })

export default ElementObserver;
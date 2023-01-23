import React from "react";

/*------------ CSS -------------*/
import './css/partner.scss';

export default (partner) => (
    <div className="partner fade-in">
        <img src={partner.image} alt="Partner" />
    </div>
);
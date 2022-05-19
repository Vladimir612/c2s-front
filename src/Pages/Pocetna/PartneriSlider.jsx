import React from "react";
import Slider from "react-slick";
import Partner from "./Partner";

const PartneriSlider = (props) => {
  const partners = props.partners.map((partner) => {
    return (
      <Partner
        key={partner.partnerName}
        partnerSlika={partner.partnerSlika}
        partnerName={partner.partnerName}
        width={props.width}
        height={props.height}
        pozadina={partner.pozadina}
        link={partner.link}
      />
    );
  });
  return (
    <div>
      <Slider {...props.settings}>{partners}</Slider>
    </div>
  );
};

export default PartneriSlider;

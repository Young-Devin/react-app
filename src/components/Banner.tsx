import React from "react";

interface Props {
  bannerTitle: string;
  bannerContent: string;
  imageSrc: string;
}

const Banner = ({ bannerTitle, bannerContent, imageSrc }: Props) => {
  return (
    <>
      <div className={imageSrc}>
        <div className="banner_center_text">
          <h2>{bannerTitle}</h2>
          <p>{bannerContent}</p>
        </div>
      </div>
    </>
  );
};

export default Banner;

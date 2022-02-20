import React, { FC } from "react";

interface ImageDetailProps {
  image: string;
  title: string;
}

export const ImageDetail: FC<ImageDetailProps> = (props) => (
  <>
    <div>
      <label>{props.title}</label>
      <img src={props.image} alt="Your image" style={{ maxWidth: "100%" }} />
    </div>
  </>
);

import React, { FC } from "react";
import { ImageViewer } from "../ImageViewer/ImageViewer";

interface ImageDetailProps {
  image: string;
  title: string;
}

export const ImageDetail: FC<ImageDetailProps> = (props) => (
  <>
    <ImageViewer>
      <label>{props.title}</label>
      <img src={props.image} alt="Your image" style={{ maxWidth: "100%" }} />
    </ImageViewer>
  </>
);

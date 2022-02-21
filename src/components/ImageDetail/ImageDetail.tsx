import React, { FC, useState } from "react";
import { ImageViewer } from "../ImageViewer/ImageViewer";
import { Loading } from "../Loading/Loading"

interface ImageDetailProps {
  image: string;
  title: string;
}

export const ImageDetail: FC<ImageDetailProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => setLoading(false);

  return (
    <div>
      <Loading loading={loading} />
      <div style={{ display: loading ? "none" : "block" }}>
        <ImageViewer>
          <label>{props.title}</label>
          <img
            key={props.image}
            src={props.image}
            alt={props.title}
            style={{ maxWidth: "100%" }}
            onLoad={imageLoaded}
          />
        </ImageViewer>
      </div>
    </div>
  );
};

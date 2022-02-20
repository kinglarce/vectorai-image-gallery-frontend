import React, { FC, ReactNode } from "react";
import { CloseBtn, ImageBody, ImageContainer, ViewerFrame } from "./style";
import { useViewer } from "./useViewer";

interface ImageViewerProps {
  children: ReactNode;
}

export const ImageViewer: FC<ImageViewerProps> = (props) => {
  const { dontClose, closeViewer, show, showViewer } = useViewer();

  return (
    <>
      {<ImageBody onClick={showViewer}>{props.children}</ImageBody>}

      {show && (
        <ViewerFrame onClick={closeViewer}>
          <CloseBtn onClick={closeViewer}>X</CloseBtn>
          <ImageContainer onClick={dontClose}>{props.children}</ImageContainer>
        </ViewerFrame>
      )}
    </>
  );
};

import React, { FC } from "react";
import { LoadingSpinner } from "./style";

interface LoadingProps {
  loading: boolean;
}

export const Loading: FC<LoadingProps> = ({ loading }) => {
  return (
    <div style={{ display: loading ? "block" : "none" }}>
      <LoadingSpinner />
    </div>
  );
};

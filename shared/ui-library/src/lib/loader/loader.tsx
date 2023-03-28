import { type FC } from "react";
import HashLoader from "react-spinners/HashLoader";

import { StyledLoader } from "./loader.styled";

/* eslint-disable-next-line */
export interface LoaderProps {
}

export const Loader: FC<LoaderProps> = () => (
  <StyledLoader>
    <HashLoader
      color={"#11114a"}
      loading={true}
      size={100}
      aria-label="Loading Spinner"
      data-testid="hash-loader"
    />
  </StyledLoader>
);

export default Loader;

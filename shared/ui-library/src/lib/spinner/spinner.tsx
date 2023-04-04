import { type FC } from "react";
import HashLoader from "react-spinners/HashLoader";

import { StyledSpinner } from "./spinner.styled";

/* eslint-disable-next-line */
export interface SpinnerProps {
}

export const Spinner: FC<SpinnerProps> = () => (
  <StyledSpinner>
    <HashLoader
      color={"#11114a"}
      loading={true}
      size={100}
      aria-label="Loading Spinner"
      data-testid="hash-loader"
    />
  </StyledSpinner>
);

export default Spinner;

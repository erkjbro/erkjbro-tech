// import { FC } from "react";
import { useLoaderData } from "react-router-dom";

import { StyledPersonal } from "./personal.styled";

export const loader = async (): Promise<string> => {
  await new Promise((r) => setTimeout(r, 500));
  return "Loader should be handling async data fetching...";
}

export const Component = () => {
  const data = useLoaderData();

  return (
    <StyledPersonal>
      <h1>About me!</h1>
      <p>My name is Erik. I like video games, building PC's, Jeeps, Mountain Bikes, and more!</p>
      <p>{`${data}`}</p>
    </StyledPersonal>
  );
}

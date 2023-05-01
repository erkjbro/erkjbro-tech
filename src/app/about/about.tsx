import type { FC } from "react";
import { useLoaderData } from "react-router-dom";

import { StyledAbout } from "./about.styled";

export const loader = async (): Promise<string> => {
  await new Promise((r) => setTimeout(r, 500));
  return "Loader should be handling async data fetching... but it's not.";
};

export const About: FC = () => {
  const data = useLoaderData();

  return (
    <StyledAbout>
      <h1>About me!</h1>
      <p>My name is Erik. I like video games, building PC's, Jeeps, Mountain Bikes, and more!</p>
      <p>{`${data}`}</p>
    </StyledAbout>
  );
};

export default About;

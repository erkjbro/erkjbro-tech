import { FC } from "react";
import { PersonalContainer } from "./personal.styles";

/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
export interface PersonalProps {
}

const Personal: FC<PersonalProps> = () => {
  return (
    <PersonalContainer>
      <h1>About me as a person!</h1>
      <p>My name is Erik. I like video games, building PC's, Jeeps, Mountain Bikes, and more!</p>
    </PersonalContainer>
  );
};

export default Personal;

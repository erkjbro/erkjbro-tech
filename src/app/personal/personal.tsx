import { FC } from 'react';
import { PersonalContainer } from './personal-styled';

/* eslint-disable-next-line  @typescript-eslint/no-empty-interface */
export interface PersonalProps {
}

export const Personal: FC<PersonalProps> = (props) => {
  return (
    <PersonalContainer>
      <h1>About me as a person!</h1>
      <p>My name is Erik. I like video games, building PC's, Jeeps, Mountain Bikes, and more!</p>
    </PersonalContainer>
  );
};

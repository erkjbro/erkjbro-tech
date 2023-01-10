import styles from './personal.module.css';

/* eslint-disable-next-line */
export interface PersonalProps {}

export function Personal(props: PersonalProps) {
  return (
    <div className={styles['container']}>
      <h1>About me as a person!</h1>
      <p>My name is Erik. I like video games, building PC's, Jeeps, Mountain Bikes, and more!</p>
    </div>
  );
}

export default Personal;

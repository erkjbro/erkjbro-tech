import styles from './personal.module.css';

/* eslint-disable-next-line */
export interface PersonalProps {}

export function Personal(props: PersonalProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Personal!</h1>
      <p>My name is Erik</p>
    </div>
  );
}

export default Personal;

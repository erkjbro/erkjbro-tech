import { useState, useEffect } from 'react';
import styles from './personal.module.css';

/* eslint-disable-next-line */
export interface PersonalProps {}

export function Personal(props: PersonalProps) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log('useEffect called');

    let windowTimer;
    const handleResize = () => windowTimer = setTimeout(() => setWidth(window.innerWidth), 500);
    window.addEventListener('resize', handleResize);

    return () => {
      console.log('useEffect cleanup called');
      window.removeEventListener('resize', handleResize);
      clearTimeout(windowTimer);
    }
  }, []);

  return (
    <div className={styles['container']}>
      <h1>About me as a person!</h1>
      <p>My name is Erik. I like video games, building PC's, Jeeps, Mountain Bikes, and more!</p>
      <p>Page width is {width}!</p>
    </div>
  );
}

export default Personal;

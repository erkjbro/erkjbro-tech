import styles from './shared-meta.module.css';

/* eslint-disable-next-line */
export interface SharedMetaProps {}

export function SharedMeta(props: SharedMetaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedMeta!</h1>
    </div>
  );
}

export default SharedMeta;

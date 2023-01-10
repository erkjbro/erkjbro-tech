import styles from './projects.module.css';

/* eslint-disable-next-line */
export interface ProjectsProps {}

export function Projects(props: ProjectsProps) {
  return (
    <div className={styles['container']}>
      <h1>Projects to be listed...</h1>
    </div>
  );
}

export default Projects;

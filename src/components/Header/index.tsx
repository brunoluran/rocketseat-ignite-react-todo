import styles from './styles.module.css';

import todoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.container}>
      <img src={todoImg} alt='Logo' />
    </header>
  );
}

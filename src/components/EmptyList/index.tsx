import styles from './styles.module.css';

import clipboardIcon from '../../assets/clipboard.svg';

export function EmptyList() {
  return (
    <div className={styles.container}>
      <img src={clipboardIcon} alt='Clipboard Icon' />
      <p style={{ fontWeight: 'bold' }}>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}

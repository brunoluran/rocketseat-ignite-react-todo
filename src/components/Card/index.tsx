import { Trash } from 'phosphor-react';
import styles from './styles.module.css';

import checkedIcon from '../../assets/checked.svg';

import notCheckedIcon from '../../assets/notChecked.svg';

interface CardProps {
  data: {
    _id: string;
    content: string;
    isChecked: boolean;
  };
  onUpdateTaskStatus: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Card({ data, onUpdateTaskStatus, onDeleteTask }: CardProps) {
  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          onUpdateTaskStatus(data._id);
        }}
      >
        {data.isChecked ? (
          <img src={checkedIcon} alt='Checked' />
        ) : (
          <img src={notCheckedIcon} alt='NotChecked' />
        )}
      </div>

      <p>{data.content}</p>
      <Trash size={20} onClick={() => onDeleteTask(data._id)} />
    </div>
  );
}

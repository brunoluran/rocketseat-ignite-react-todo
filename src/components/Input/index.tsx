import React, { InputHTMLAttributes } from 'react';

import { PlusCircle } from 'phosphor-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSubmit: any;
}

import styles from './styles.module.css';
export function Input({ onSubmit, ...props }: InputProps) {
  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <input className={styles.input} {...props} />
      <button type='submit' className={styles.button}>
        Criar
        <PlusCircle size={16} weight='bold' />
      </button>
    </form>
  );
}

import { FormEvent, InvalidEvent, useState } from 'react';
import uuid from 'react-uuid';

import { Header } from './components/Header';
import { EmptyList } from './components/EmptyList';
import { Input } from './components/Input';
import { Card } from './components/Card';

import styles from './theme/App.module.css';

export function App() {
  const [newTask, setNewTask] = useState({
    _id: uuid(),
    content: '',
    isChecked: false,
    createdAt: new Date(),
  });

  const [tasks, setTasks] = useState([
    {
      _id: uuid(),
      content: 'Finalizar estudos - Rocketseat',
      isChecked: false,
      createdAt: new Date(),
    },
  ]);

  function handleCreateTask(event: FormEvent<HTMLInputElement>) {
    event.preventDefault();

    setTasks([...tasks, newTask]);

    setNewTask({
      _id: uuid(),
      content: '',
      isChecked: false,
      createdAt: new Date(),
    });
  }

  function handleUpdateTaskStatus(taskId: string) {
    const newTaskStatus = tasks.map((items) =>
      items._id === taskId
        ? {
            ...items,
            isChecked: !items.isChecked,
          }
        : { ...items }
    );

    setTasks(newTaskStatus);
  }

  function deleteTask(taskId: string) {
    const tasksWithoutTheDeletedOne = tasks.filter((items) => items._id !== taskId);
    setTasks(tasksWithoutTheDeletedOne);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Campo obrigatório!');
  }

  const isCheckedLenght = tasks.filter((items) => items.isChecked === true);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Input
          placeholder='Adicione uma nova tarefa'
          value={newTask.content}
          onChange={(e) => {
            setNewTask({
              _id: uuid(),
              content: e.target.value,
              isChecked: false,
              createdAt: new Date(),
            });
            e.target.setCustomValidity('');
          }}
          onSubmit={handleCreateTask}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <div>
          <header className={styles.listHeader}>
            <div className={styles.createdTasks}>
              <p>Tarefas criadas</p>
              <div className={styles.badge}>{tasks?.length}</div>
            </div>

            <div className={styles.concludeTasks}>
              <p>Concluídas</p>
              <div className={styles.badge}>{`${isCheckedLenght.length} de ${tasks?.length}`}</div>
            </div>
          </header>
        </div>
        {tasks.length === 0 ? (
          <>
            <div className={styles.border} />
            <EmptyList />
          </>
        ) : (
          <>
            {tasks.map((task) => {
              return (
                <Card
                  key={task._id}
                  data={task}
                  onUpdateTaskStatus={handleUpdateTaskStatus}
                  onDeleteTask={deleteTask}
                />
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

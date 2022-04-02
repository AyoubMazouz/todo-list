import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskInput from './components/TaskInput'

const App = () => {


  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));

  console.log(JSON.parse(localStorage.getItem('tasks')))

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])


  const onSubmit = e => {
    e.preventDefault();
    if (input.trim().length < 3) return;

    setTasks([{
      id: Math.random() * 1000 | 0,
      text: input,
      time: '00:00',
      complete: false,
      editMode: false
    }, ...tasks
    ]);

    setInput('');
  }

  const editMode = id => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, editMode: !task.editMode } : task
      ))
  }

  return (
    <div className='w-full space-y-4'>


      <TaskInput input={input} setInput={setInput} onSubmit={onSubmit} />
      <TaskForm tasks={tasks} editMode={editMode} setTasks={setTasks} />

    </div>
  );
}

export default App;

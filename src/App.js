import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskInput from './components/TaskInput'

const App = () => {



  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));

  useEffect(() => {
    setTasks(prev => prev.map(task => ({ ...task, editMode: false })))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])



  const onSubmit = () => {
    if (input.trim().length < 3) return;

    const d = new Date()

    setTasks([{
      id: Math.random() * 1000 | 0,
      text: input,
      complete: false,
      editMode: false,
      time: `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`
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

    <div className='w-full space-y-4 px-4 py-16 sm:w-[600px] md:w-[750px] lg:w-[1000px]'>

      <TaskInput input={input} setInput={setInput} onSubmit={onSubmit} />
      <TaskForm tasks={tasks} editMode={editMode} setTasks={setTasks} />

    </div>

  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskInput from './components/TaskInput'

const App = () => {

  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // %%%%%%%%%%%  VARIABLES  %%%%%%%%%%%%%
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  const alerts = {
    minimumLength: 'Task must be a least 3 characters long!',
    maximumLength: 'Task must be a under 80 characters.'
  }

  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // %%%%%%%%%%%%%%  STATS  %%%%%%%%%%%%%%
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));

  useEffect(() => {
    setTasks(prev => prev.map(task => ({ ...task, editMode: false })))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // %%%%%%%%  HELPER FUNCTIONS  %%%%%%%%%
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  const getDate = () => {

    const d = new Date();

    const day = d.getDay();
    const mon = d.getMonth();
    const year = d.getFullYear();
    const h = d.getHours();
    const min = d.getMinutes();

    return `${day}/${mon}/${year} ${h}:${min}`
  }

  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // %%%%%%%%%  MAIN FUNCTIONS  %%%%%%%%%%
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  const onSubmit = () => {

    const len = input.trim().length;
    if (len < 3) {
      alert(alerts.minimumLength);
      return
    } else if (len > 80) {
      alert(alerts.maximumLength);
      return
    }

    setTasks([{
      id: Math.random() * 1000 | 0,
      text: input,
      complete: false,
      editMode: false,
      time: getDate()
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

  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  // %%%%%%%%%%%%%%%  JSX  %%%%%%%%%%%%%%%
  // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  return (

    <div className='transition-all w-94 space-y-2 px-4 py-16 sm:w-[600px] md:w-[750px] lg:w-[1000px]'>

      <header className='w-full flex justify-center'>

    <h1 className='text-2xl text-accent font-bold'
    >ToDo List</h1>

      </header>

      <TaskInput input={input} setInput={setInput} onSubmit={onSubmit} />
      <TaskForm tasks={tasks} editMode={editMode} setTasks={setTasks} />

    </div>

  );
}

export default App;

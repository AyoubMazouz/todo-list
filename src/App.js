import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskInput from './components/TaskInput'

const App = () => {


  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);


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




  const deleteTask = id => setTasks(tasks.filter(task => task.id !== id));

  const onChange = (e, id) => {

    const currentValue = e.target.value;
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, text: currentValue } : task
      ))


  }



  return (
    <div className='w-full space-y-4'>


      <TaskInput input={input} setInput={setInput} onSubmit={onSubmit} />
      <TaskForm tasks={tasks} editMode={editMode} deleteTask={deleteTask} setTasks={setTasks} />

    </div>
  );
}

export default App;

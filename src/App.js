import './App.css';
import { useState } from 'react';

function App() {


  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([{
    id: '',
    text: '',
    time: '',
    complete: false,
    editMode: false
  }]);


  const onSubmit = e => {
    e.preventDefault();

    setTasks([{
      id: Math.random() * 1000 | 0,
      text: input,
      time: '00:00',
      complete: false,
      editMode: false
    }, ...tasks
    ]);
  }

  const onEdit = id => {
    let temp = {};
    tasks.forEach(task => {
      if (task.id === id) temp = {
        id: task.id,
        text: task.text,
        time: '00:00',
        complete: task.complete,
        editMode: task.editMode
      }
    })
    const newArray = tasks.filter(task => task.id != id);
    setTasks([{
      id: temp.id,
      text: temp.text,
      time: '00:00',
      complete: temp.complete,
      editMode: !temp.editMode
    }, ...newArray]);
  }


  const deleteTask = id => {
    const newArray = tasks.filter(task => task.id != id);
    setTasks([...newArray]);
  }

  const onTextEdit = (e, id) => {
    let temp = {};
    tasks.forEach(task => {
      if (task.id === id) temp = {
        id: task.id,
        text: task.text,
        time: '00:00',
        complete: task.complete,
        editMode: false
      }
    })
    const newArray = tasks.filter(task => task.id != id);
    setTasks([{
      id: temp.id,
      text: e.target.value,
      time: '00:00',
      complete: temp.complete,
      editMode: !temp.editMode
    }, ...newArray]);
  }



  return (
    <div className='flex flex-col gap-6 justify-center items-center px-8 py-6'>


      <div>

        <input type='input'
          placeholder='Type a Task...'
          value={input}
          onChange={e => setInput(e.target.value)}
          className=''></input>

        <button type='submit'
          onClick={onSubmit}
          className=''>
          Add + </button>

      </div>


      {
        tasks.length > 0 ?

          tasks.map(task =>

            <div>

              {
                task.editMode ?
                  <>

                    <input type='input'
                      key={task.id}
                      value={task.text}
                      onChange={e => onTextEdit(e, task.id)}
                      className=''
                    >
                    </input>

                    <button onClick={() => onEdit(task.id)}
                      key={task.id}
                      className=''>
                      save
                    </button>

                  </>
                  :
                  <>

                    <div key={task.id}
                      className=''>
                      {task.text}
                    </div>

                    <button onClick={() => onEdit(task.id)}
                      key={task.id}
                      className=''>
                      edit
                    </button>

                  </>
              }

              <div key={task.id}
                className=''>
                {task.time}
              </div>

              <button onClick={() => deleteTask(task.id)}
                key={task.id}
                className=''>
                delete
              </button>

            </div>

          ) :

          <div>
            No tasks available
          </div>
      }

    </div>
  );
}

export default App;

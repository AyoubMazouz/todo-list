import { useState, useEffect } from 'react';
import { FaTrashAlt, FaSave, FaEdit } from 'react-icons/fa';



const TaskForm = ({ tasks, setTasks }) => {

    if (tasks.length === 0) {
        return <h3 className="col-span-12"
        >No tasks available</h3>
    }

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%  VARIABLES  %%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    const completedTaskCss = 'grid grid-cols-12 rounded shadow-md pl-6 py-1 bg-gray-100 cursor-pointer';
    const unCompletedTaskCss = 'grid grid-cols-12 rounded shadow-lg pl-4 py-3 bg-gray-50 cursor-pointer';

    return (
        tasks.map(task =>
            <div key={task.id}
                onClick={() => setTasks(p => p.map(t => task.id === t.id ? { ...t, complete: !t.complete } : t))}
                className={task.complete ? completedTaskCss : unCompletedTaskCss}>

                {task.editMode
                    ? <EditLabel task={task} setTasks={setTasks} />
                    : <Label task={task} />
                }

                {<button onClick={() => setTasks(p => p.map(t =>
                    task.id === t.id ? { ...t, editMode: !t.editMode } : t))}
                    className='col-span-1 mx-2'
                >{task.editMode
                    ? <FaSave className='text-2xl text-green-600' />
                    : <FaEdit className='text-2xl text-blue-600' />
                    }</button>
                }

                <button onClick={() => setTasks(tasks.filter(t => task.id !== t.id))}
                    className='col-span-1 mx-2'
                ><FaTrashAlt className='text-2xl text-red-600'
                    /></button>


            </div>
        )

    )
}
export default TaskForm;



const Label = ({ task }) => {


    const completedTaskCss = 'text-sm text-gray-800 text-overflow line-through text-gray-500';
    const unCompletedTaskCss = 'text-sm text-gray-600 text-overflow';

    return (
        <div className='col-span-10'>

            <h3 className={task.complete ? completedTaskCss : unCompletedTaskCss}
            >{task.text}</h3>

            <h6 className='text-xs font-bold text-gray-600 px-2'
            >{task.time}</h6>

        </div>
    )
}

const EditLabel = ({ task, setTasks }) => {
    return (
        <input type='input'
            value={task.text}
            onChange={e => {
                setTasks(prev =>
                    prev.map(t => t.id === task.id ? { ...t, text: e.target.value } : t))
            }}
            className='col-span-10 bg-gray-50 h-9 focus:outline-none text-sm px-4'
        ></input>
    )
}


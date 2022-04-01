import { useState } from "react";


const TaskForm = ({ tasks, setTasks, editMode, deleteTask }) => {

    if (tasks.length === 0) {
        return <h3 className="col-span-12"
        >No tasks available</h3>
    }

    return (
        tasks.map(task =>
            <div key={task.id}
                className="grid grid-cols-12 gap-1">

                {task.editMode ? <EditLabel task={task} setTasks={setTasks} /> : <Label task={task} />}

                {<button onClick={() => editMode(task.id)}
                    className='col-span-1 bg-orange-500'
                >{task.editMode ? 'Save' : 'Edit'}</button>}

                <button onClick={() => deleteTask(task.id)}
                    className='col-span-1 bg-red-500'
                >delete</button>

            </div>
        )

    )
}
export default TaskForm;

const Label = ({ task }) => {
    return (
        <div className='col-span-10 bg-green-500'>
            <h3 className=''
            >{task.text}</h3>

            <h6 className=''
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
            className='col-span-10 bg-orange-500'
        ></input>
    )
}


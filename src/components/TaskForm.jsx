

const TaskForm = ({ tasks, setTasks }) => {

    if (tasks.length === 0) {
        return <h3 className="col-span-12"
        >No tasks available</h3>
    }

    return (
        tasks.map(task =>
            <div key={task.id}
                className="grid grid-cols-12 gap-1 rounded shadow-md p-4 bg-gray-50 text-gray-800">

                {task.editMode ? <EditLabel task={task} setTasks={setTasks} /> : <Label task={task} />}

                {<button onClick={() => setTasks(p => p.map(t => task.id === t.id ? { ...t, editMode: !t.editMode } : t))}
                    className='col-span-1'
                >{task.editMode ? 'Save' : 'Edit'}</button>}

                <button onClick={() => setTasks(tasks.filter(t => task.id !== t.id))}
                    className='col-span-1'
                >delete</button>

            </div>
        )

    )
}
export default TaskForm;

const Label = ({ task }) => {
    return (
        <div className='col-span-10'>
            <h3 className='text-sm text-gray-800 text-overflow'
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
            className='col-span-10'
        ></input>
    )
}


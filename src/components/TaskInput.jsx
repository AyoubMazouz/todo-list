const TaskInput = ({ input, setInput, onSubmit }) => {


    return (

        <div className="grid grid-cols-12 gap-2">

            <input type='input'
                placeholder='Type a Task...'
                value={input}
                onChange={e => setInput(e.target.value)}
                className='col-span-11'
            ></input>

            <button type='submit'
                onClick={onSubmit}
                className=''>
                Add +
            </button>

        </div>

    )
}

export default TaskInput;
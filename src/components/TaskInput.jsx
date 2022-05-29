import { FaPlus } from 'react-icons/fa'

const TaskInput = ({ input, setInput, onSubmit }) => {
    return (
        <div className="grid grid-cols-12 pl-4 rounded shadow-md bg-light text-semidark mb-12">

            <input type='input'
                placeholder='Type a Task...'
                value={input}
                onChange={e => setInput(e.target.value)}
                className='col-span-11 h-12 px-4 focus:outline-none bg-light text-sm text-accent font-bold'
            ></input>

            <button type='submit'
                onClick={onSubmit}
                className=''>
                <FaPlus className='icons' />
            </button>
        </div>

    )
}
export default TaskInput;
import { FaPlus } from 'react-icons/fa'

const TaskInput = ({ input, setInput, onSubmit }) => {


    return (

        <div className="grid grid-cols-12 gap-2 p-2 rounded shadow-md bg-gray-50 text-gray-800">

            <input type='input'
                placeholder='Type a Task...'
                value={input}
                onChange={e => setInput(e.target.value)}
                className='col-span-11 h-12 px-4 focus:outline-none bg-gray-50 text-sm'
            ></input>

            <button type='submit'
                onClick={onSubmit}
                className=''>
                <FaPlus />
            </button>

        </div>

    )
}

export default TaskInput;
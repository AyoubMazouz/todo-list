import { FaPlus } from 'react-icons/fa'



const TaskInput = ({ input, setInput, onSubmit }) => {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%  JSX  %%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    return (

        <div className="grid grid-cols-12 pl-4 rounded shadow-md bg-[#192231] text-gray-50 mb-12">

            <input type='input'
                placeholder='Type a Task...'
                value={input}
                onChange={e => setInput(e.target.value)}
                className='col-span-11 h-12 px-4 focus:outline-none bg-[#192231] text-sm'
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
import {useState} from 'react'

export default function TodoForm ({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          addTodo(value);
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Enter your new to-do' />
    <button type="submit" className='todo-btn'>Add new task</button>
  </form>
  )
}
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionTypes, addTodo } from '../../../store/todos';

export const TodoForm = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" onChange={(evt) => setTodoTitle(evt.target.value)} />
      <button onClick={() => dispatch(addTodo(todoTitle))}>Add Todo</button>
    </div>
  );
};

export default TodoForm;

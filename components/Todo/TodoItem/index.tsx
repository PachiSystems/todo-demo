import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../../store/todos';

type TodoProps = {
  title: string;
  id: number;
};

const TodoItem = (props: TodoProps) => {
  const dispatch = useDispatch();
  return (
    <li
      onClick={() => {
        dispatch(removeTodo(props.id));
      }}
    >
      {props.title}
    </li>
  );
};

export default TodoItem;

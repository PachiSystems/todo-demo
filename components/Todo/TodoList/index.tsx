import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import { getTodos } from '../../../store/todos';

export const TodoList = () => {
  const listOfTodos = useSelector(getTodos);

  if (!listOfTodos || !listOfTodos.length) return <div>NO TODOS</div>;

  return (
    <ul>
      {listOfTodos.map((todo) => (
        <TodoItem key={Date.now().toString() + todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;

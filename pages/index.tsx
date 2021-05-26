import React, { FunctionComponent } from 'react';
import { TodoList, TodoForm } from '../components/Todo';

export const HomePage: FunctionComponent = () => (
  <>
    <div>
      <h1>TODO LIST</h1>
      <TodoList />
      <TodoForm />
    </div>
  </>
);

export default HomePage;

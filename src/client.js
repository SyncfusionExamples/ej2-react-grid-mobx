import 'todomvc-common';
import TodoStore from './stores/TodoStore';
import ViewStore from './stores/ViewStore';
import TodoApp from './components/todoApp.js';
import React from 'react';
import ReactDOM from 'react-dom';

const initialState = window.initialState && JSON.parse(window.initialState) || {};
initialState.todos =  [{ id: 1, title: 'Hi', completed: false },
{ id: 2, title: 'Hi', completed: false },
{ id: 3, title: 'Hi', completed: false },
{ id: 4, title: 'Hi', completed: false },
{ id: 5, title: 'Hi', completed: false },
{ id: 6, title: 'Hi', completed: false },
{ id: 7, title: 'Hi', completed: false },
{ id: 8, title: 'Hi', completed: false },
{ id: 9, title: 'Hi', completed: false },
{ id: 10, title: 'Hi', completed: false }
];
var todoStore = TodoStore.fromJS(initialState.todos || []);
var viewStore = new ViewStore();

//todoStore.subscribeServerToStore();

ReactDOM.render(
	<TodoApp todoStore={todoStore} viewStore={viewStore}/>,
	document.getElementById('todoapp')
);

if (module.hot) {
  module.hot.accept('./components/todoApp', () => {
    var NewTodoApp = require('./components/todoApp').default;
    ReactDOM.render(
      <NewTodoApp todoStore={todoStore} viewStore={viewStore}/>,
      document.getElementById('todoapp')
    );
  });
}


import {observable, computed, reaction} from 'mobx';
import TodoModel from '../models/TodoModel'
import * as Utils from '../utils';


export default class TodoStore {
	@observable todos = [];

	@computed get activeTodoCount() {
		return this.todos.length;
	}

	@computed get completedCount() {
		return 0;
	}

	addTodo(title) {
		this.todos.push(new TodoModel(this, Utils.uuid(), title, false));
	}
	removeTodo() {
		this.todos.shift();
	}

	toJS() {
		return this.todos.map(todo => todo.toJS());
	}

	static fromJS(array) {
		const todoStore = new TodoStore();
		todoStore.todos = array.map(item => TodoModel.fromJS(todoStore, item));
		return todoStore;
	}
}

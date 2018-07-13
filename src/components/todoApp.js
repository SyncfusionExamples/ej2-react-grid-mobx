import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import TodoEntry from './todoEntry';
import TodoOverview from './todoOverview';
import TodoFooter from './todoFooter';
import { ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from '../constants';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

import DevTool from 'mobx-react-devtools';

const Li = function (prop) {
	return (<li>{prop.item.title}</li>);
}

@observer
export default class TodoApp extends React.Component {

	render() {

		const { todoStore, viewStore } = this.props;
		let lis = todoStore.todos.map((todo) => <Li item={todo} />)
		let added = false;
		return (
				<div id="g">
					<ButtonComponent cssClass='e-flat e-primary' iconCss='e-icons e-open-icon' iconPosition='Right' isToggle onClick={
						() => {
							this.timer = setInterval(() => {
								if (added) {
									todoStore.addTodo('Added');
									added = false;
								} else {
									todoStore.removeTodo();
									added = true;
								}
							}, 1000);

						}}>Start</ButtonComponent>
					<ButtonComponent cssClass='e-flat e-primary' iconCss='e-icons e-open-icon' iconPosition='Right' isToggle onClick={
						() => {
							clearInterval(this.timer);
						}}>Stop</ButtonComponent>
					<GridComponent dataSource={todoStore.todos}>
						<ColumnsDirective>
							<ColumnDirective field='id' headerText='ID' width='150'></ColumnDirective>
							<ColumnDirective field='title' headerText='Title' width='100'></ColumnDirective>
							<ColumnDirective field='completed' headerText='Completed' width='100'></ColumnDirective>
						</ColumnsDirective>
					</GridComponent>
				</div>
				);
			}
				}

				TodoApp.propTypes = {
					viewStore: PropTypes.object.isRequired,
				todoStore: PropTypes.object.isRequired
			};

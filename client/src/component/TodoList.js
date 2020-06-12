import React from 'react';
import { Q_TODO_LIST } from '../graphql/todoQuery'

function TodoList (props) {
	let { id, desc, status, onDelete, onUpdate }  = props;
	return(
		<li>
			{
				status === 'complete' ?
				<del onClick={() => {
					status = (status === 'active' ? 'complete' : 'active');
					onUpdate(id, { status });
				}}>
					{desc}
				</del>
				:
				<p onClick={() => {
					status = (status === 'active' ? 'complete' : 'active');
					onUpdate(id, { status });
				}}>
					{desc}
				</p>
			}
			<span onClick={ () => {
					console.log('delete 클릭');
					onDelete(id);
				}
			}>
				&times;
			</span>

		</li>
	)
}

export default TodoList;

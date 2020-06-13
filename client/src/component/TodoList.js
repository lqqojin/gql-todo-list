import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import {LIKE_TODO, Q_TODO_LIST} from '../graphql/todoQuery'

function TodoList (props) {
	let { id, desc, status, isLiked, onDelete, onUpdate }  = props;
	const [toggleLikeMovie] = useMutation(LIKE_TODO, {variables: {id: id, isLiked}})
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

			<button onClick={toggleLikeMovie}>{isLiked ? 'UnLike' : 'Like'}</button>
		</li>
	)
}

export default TodoList;

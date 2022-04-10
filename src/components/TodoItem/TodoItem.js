const TodoItem = ({id, title, text, picture, tag, completed, index, deleteTodo, completedTodo}) => {


	const deleteHandler = () => {
		deleteTodo(id)
	}

	const completedHandler = () => {
		completedTodo(id)
	}


	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			<span className={completed ? "text-muted" : ""}>
				{index + 1}. {title}
				<div>
					{text}
				</div>

				<div>
				<img src={picture} alt="Тут должна быть картинка" />
					
				</div>
				<div>
					#{tag}
				</div>
			</span>
			
			<div>
				<button onClick={completedHandler} type="button" className={`btn btn-${completed ? 'secondary' : 'success'} mx-1`}>{completed ? 'Просмотрено' : 'Непросмотрено'}</button>
				<button onClick={deleteHandler} type="button" className="btn btn-danger mx-1">Удалить пост</button>
			</div>
		</li>
	)
}


export default TodoItem
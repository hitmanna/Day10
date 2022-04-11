import { useContext } from "react"
import { TodoListContext } from "../../../../contexts/TodoListContext"


const TodoItem = ({id, title, text, picture, tag, index, completed}) => {

	const {completedTodo, deleteTodo} = useContext(TodoListContext)

	const deleteHandler = () => deleteTodo(id)

	const completedHandler = () => completedTodo(id)

	return (
		<li className="list-group-item">
			<span>
				{index + 1}. {title}

				<div>
					{text}
				</div>

				<div>
				<img src={picture} className="img-thumbnail" alt="Тут должна быть картинка" />
					
				</div>
				<div>
					#{tag}
				</div>
			</span>
			<div>
				<button onClick={completedHandler} type="button" className="btn btn-success">Просмотрено</button>
				<button onClick={deleteHandler} type="button" className="btn btn-danger">Удалить</button>
			</div>
		</li>
	)
}

export default TodoItem
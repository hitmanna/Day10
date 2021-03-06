import { useContext } from "react"
import { TodoListContext } from "../../../contexts/TodoListContext"
import TodoItem from "./TodoItem/TodoItem"

const TodoList = () => {

	const {todos} = useContext(TodoListContext)


	return (
<>
		
		<ul className="list-group ">
			{todos.map((todo, index) => (
				<TodoItem key={todo.id} id={todo.id} index={index} completed={todo.completed} title={todo.title}
        text={todo.text}
        picture={todo.picture}
        tag={todo.tag} />
			)).reverse()}
		</ul>
		</>
	)
}

export default TodoList
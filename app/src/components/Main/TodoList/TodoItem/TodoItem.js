import { useContext, useState } from "react"
import { TodoListContext } from "../../../../contexts/TodoListContext"
import Form from "../../../Header/Form/Form"
import Modal from "../../../Modal/Modal"


const TodoItem = ({id, title, text, picture, tag, index,}) => {

	const {deleteTodo} = useContext(TodoListContext)

	const deleteHandler = () => deleteTodo(id)

    const [viewModal, setViewModal] = useState(false)

	const openModal = () => {
		setViewModal(true)
	  }

	return (
		<div>
		<div>
		<li className="list-group-item">
			<span>
				{index + 1}. {title}

				<div>
					{text}
				</div>

				<div className="row mb-4 col-md-4 p-2 grey">
				<img src={picture} className="img-thumbnail" alt="Тут должна быть картинка" />
					
				</div>
				<div>
					#{tag}
				</div>
			</span>
			<div>
				<button onClick={openModal} type="button" className="btn btn-success">Редактировать</button>
				<button onClick={deleteHandler} type="button" className="btn btn-danger">Удалить</button>
			</div>
		</li>
		</div>
		<div> 
			 < Modal 
			state = {viewModal}
          >  
		  Редактирование поста   < Form /> 	</Modal> 
		</div>
		</div>
	)
}

export default TodoItem
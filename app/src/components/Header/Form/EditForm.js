import { useEffect, useState, useContext } from "react";
import { useNavigate} from "react-router-dom";
import { TodoListContext } from "../../../contexts/TodoListContext";

function EditForm({closeModal, id, title = '', text ='', picture = '', tag = ''}) {

    const [title1, setTitle] = useState(title)
    const [text1, setText] = useState(text)
    const [picture1, setPicture]=useState(picture)
    const [tag1, setTag]=useState(tag)
    const [id1]=useState(id)

    const { completedTodo } = useContext(TodoListContext);

    useEffect(() => {}, [])

    const changeHandler = (e) => setTitle(e.target.value);

  const changeText = (e) => {    setText(e.target.value)
  }

  const changePicture = (e) => {    setPicture(e.target.value)
  }
  
  const changeTag = (e) => {    setTag(e.target.value)
  }

  
  const navigate = useNavigate();

  
  const submitHandler = (e) => {
    e.preventDefault();
   

    const titleTrim = title1.trim();
    let newText = text1.trim()
    let newPicture = picture1.trim()
    let newTag = tag1.trim()

    if (titleTrim) {
        completedTodo(id1,titleTrim, newText, newPicture, newTag);
      setTitle('') 
      setText('') 
      setPicture('') 
      setTag('')
      navigate('/')
          }

    
  };

return (
<form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Дайте название вашему посту</label>  
      <input
        onChange={changeHandler}
        type="text"
        className="form-control"
        name="title"
        aria-describedby="emailHelp"
        placeholder="Заголовок"
        value={title1}
      />
    </div>

    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Опишите как дела у вашего котика</label>
      <input
        onChange={changeText}
        type="text"
        className="form-control"
        name="text"
        aria-describedby="emailHelp"
        placeholder="Текст поста"
        value={text1}
      />
    </div>

    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Вставте прямую ссылку с фоткой</label>
      <input
        onChange={changePicture}
        type="url"
        className="form-control"
        name="picture"
        aria-describedby="emailHelp"
        placeholder="Ссылка на картинку"
        value={picture1}
      />
    </div>

    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Добавте тег для удобства поиска</label>
      <input
        onChange={changeTag}
        type="text"
        className="form-control"
        name="tag"
        aria-describedby="emailHelp"
        placeholder="тег"
        value={tag1}
      />
    </div>

    <button type="submit" className="btn btn-primary">
      Отправить
    </button>
    <button onClick={closeModal} className="btn btn-warning">
      Закрыть
    </button>
  </form>




)
}


export default EditForm


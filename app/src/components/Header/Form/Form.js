import { useContext, useState } from "react";
import { useNavigate} from "react-router-dom";
import { TodoListContext } from "../../../contexts/TodoListContext";



const Form = () => {
  const [title, setTitle] = useState("");
  
  const [text, setText ] = useState("")

  const [picture, setPicture ] = useState("")

  const [tag, setTag ] = useState("")

  const { createTodo } = useContext(TodoListContext);

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
   

    const titleTrim = title.trim();
    let newText = text.trim()
    let newPicture = picture.trim()
    let newTag = tag.trim()

    if (titleTrim) {
      createTodo(titleTrim, newText, newPicture, newTag);
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
        value={title}
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
        value={text}
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
        value={picture}
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
        value={tag}
      />
    </div>

    <button type="submit" className="btn btn-primary">
      Отправить
    </button>
  </form>
  );
};

export default Form;

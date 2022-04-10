import { useState } from "react";

const Form = ({addNewTodo}) => {

  const [title, setTitle] = useState("")

  const [text, setText ] = useState("")

  const [picture, setPicture ] = useState("")

  const [tag, setTag ] = useState("")

  const changeHandler = (e) => {
    setTitle(e.target.value)
  }

  const changeText = (e) => {
    setText(e.target.value)
  }

  const changePicture = (e) => {
    setPicture(e.target.value)
  }
  
  const changeTag = (e) => {
    setTag(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    let newTitle = title.trim()
    let newText = text.trim()
    let newPicture = picture.trim()
    let newTag = tag.trim()
    if (newTitle) {
      addNewTodo(newTitle, newText, newPicture, newTag)
      setTitle('') 
      setText('') 
      setPicture('') 
      setTag('')
    }
        }


  return (
    <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
      <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Дайте название вашему посту</label>  
        <input
          onChange={changeHandler}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
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
          id="exampleInputEmail1"
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
          id="exampleInputEmail1"
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
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
					placeholder="тег"
          value={tag}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Добавить пост
      </button>
    </form>
  );
};

export default Form
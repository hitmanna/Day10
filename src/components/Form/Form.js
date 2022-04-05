const Form = () => {

    return (
        <div>
            <form>
  <div className="mb-3" >
    <label  className="form-label">Заголовок</label>
    <input type="text" className="form-control"  placeholder="введите название поста"/>
     </div>
     <div className="mb-3" >
    <label  className="form-label">Текст</label>
    <input type="text" className="form-control"  placeholder="введите название поста"/>
     </div><div className="mb-3" >
    <label  className="form-label">картинка</label>
    <input type="text" className="form-control"  placeholder="введите название поста"/>
     </div>
     <div className="mb-3" >
    <label  className="form-label">Тег</label>
    <input type="text" className="form-control"  placeholder="введите название поста"/>
     </div>
  <button type="submit" className="btn btn-primary">Отослать на сервер</button>
</form>
        </div>
    )

}

export default Form
import { useEffect, useState } from "react";

const LSTodosKey = "todos";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = async (title, text, picture, tag) => {
    const newTodo = {
      id: Date.now(),
      title,
      text,
      picture,
      tag,

      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const completedTodo = (id1, title1, text1, picture1, tag1) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id == id1) {
          return {
            ...todo,
            title: title1,
            text: text1,
            picture:  picture1,
            tag: tag1,
          };
        }
        return todo;
      })
    );
  };

    
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  useEffect(() => {
    const dataFromLS = localStorage.getItem(LSTodosKey);
    if (dataFromLS) {
      setTodos(JSON.parse(dataFromLS));
     } /* else {

			fetch('https://jsonplaceholder.typicode.com/todos/?_limit=2')
				.then(res => res.json())
				.then(data => data.map(({title, userId, ...rest}) => ({...rest, text: title})))
				.then(setTodos)
		} */
    // емли нужны несколько постов для теста, раскоментить выше
  }, []);

  useEffect(() => {
    localStorage.setItem(LSTodosKey, JSON.stringify(todos));
  }, [todos]);


	return {
		todos,
		createTodo,
		completedTodo,
		deleteTodo,
		clearAllTodos,
	}
};

export default useTodos

import styles from './styles.module.css'

const Footer = ({clearTodos, returnToPrevState}) => {




	return (
		<footer className='d-flex mt-5 justify-content-center'>
			<button onClick={returnToPrevState} type="button" className="btn btn-success mx-1">Вернуть как было</button>
			<button onClick={clearTodos} type="button" className="btn btn-danger mx-1">Удалить все посты</button>
		</footer>
	)
}

export default Footer
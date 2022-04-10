import Form from '../Form/Form'
import styles from './styles.module.css'

const Header = ({addNewTodo}) => {




	return (
		<header>
            <h1>Инстаграмм ваших котиков</h1>
				<Form addNewTodo={addNewTodo} />
		</header>
	)
}

export default Header
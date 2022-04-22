import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import styles from './modal.module.css'

const Modal = ({children, state = false}) => {
  
    if (!state) return null

    return (
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          {children}
        </div>
      </div>
    )
    }

    export default Modal
  
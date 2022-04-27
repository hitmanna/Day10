import ReactDOM from 'react-dom'
import { useEffect, } from 'react'
import styles from './modal.module.css'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

const Modal = ({children, state = false}) => {
  
    if (!state) return null

             return (
      <motion.div animate={{scale:2 }} className={styles.wrapper}>
         <div className={styles.inner}>
          {children}
        </div>
      </motion.div>
    )
    }

    export default Modal
  
    
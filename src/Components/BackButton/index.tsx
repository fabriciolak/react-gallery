import { useNavigate } from "react-router-dom"

import styles from './BackButton.module.css'

const BackButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <button className={styles.button} onClick={handleClick}>Voltar</button>
  )
}

export default BackButton
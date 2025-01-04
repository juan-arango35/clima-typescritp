import styles from './Alert.module.css'


const Alert = ({children}:{children:React.ReactNode}) => {
  return (
    <div className={styles.alert}>{children}</div>
  )
}

export default Alert
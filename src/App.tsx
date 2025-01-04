


import styles from  './App.module.css'
import Form from './components/form/Form'
import useWeather from './hooks/useWeather'
function App() {

  const {fecthWather} = useWeather()


  return (
    <>
      <h1 className={styles.title}>Hola mundo</h1>
      <div className={styles.container}>
     
       <Form  fecthWather={fecthWather}/>

      </div>
    </>
  )
}

export default App

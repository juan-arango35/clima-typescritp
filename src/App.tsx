import styles from "./App.module.css";
import CLima from "./components/clima/CLima";
import Form from "./components/form/Form";
import useWeather from "./hooks/useWeather";
function App() {
  const { fecthWather, weather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Hola mundo</h1>
      <div className={styles.container}>
        <Form fecthWather={fecthWather} />
        {weather?.name && <CLima weather={weather} />}
      </div>
    </>
  );
}

export default App;

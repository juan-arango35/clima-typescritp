import styles from "./App.module.css";
import CLima from "./components/clima/CLima";
import Form from "./components/form/Form";
import Spiner from "./components/spinner/Spiner";
import useWeather from "./hooks/useWeather";
function App() {
  const { fecthWather, weather , loading} = useWeather();

  return (
    <>
      <h1 className={styles.title}>API del Clima</h1>
      <div className={styles.container}>
        <Form fecthWather={fecthWather} />
        {loading && <Spiner/>}
        {weather?.name && <CLima weather={weather} />}
      </div>
    </>
  );
}

export default App;

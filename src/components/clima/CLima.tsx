import styles from "./Clima.module.css";

const CLima = ({
  weather,
}: {
  weather: {
    name: string;
    main: { temp: number; temp_min: number; temp_max: number };
  } | null;
}) => {
  if (!weather) {
    return (
      <div>Por favor, ingrese una ciudad y un país para ver el clima.</div>
    ); // Mensaje mientras se cargan los datos
  }

  function truncarADecimal(numero: number) {
    return parseFloat(
      numero.toString().slice(0, numero.toString().indexOf(".") + 2)
    );
  }
  return (
    <div className={styles.container}>
      <h2>Clima en {weather.name}</h2>
      <p>
        {" "}
        <span className={styles.temp}>
          {" "}
          {truncarADecimal(weather.main.temp - 273.15)}°C
        </span>
      </p>
      <div className={styles.tempInfo}>
        <p className={styles.info}>Min: <span className={styles.tempNumber}> {truncarADecimal(weather.main.temp_min - 273.15)}°C</span></p>
        <p className={styles.info}>Max: <span className={styles.tempNumber}>{truncarADecimal(weather.main.temp_max - 273.15)}°C</span> </p>
      </div>
    </div>
  );
};

export default CLima;

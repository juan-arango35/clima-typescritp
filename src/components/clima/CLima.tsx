




const CLima = ({ weather }: { weather: { name: string; main: { temp: number; temp_min: number; temp_max: number } } | null }) => {
  if (!weather) {
    return <div>Por favor, ingrese una ciudad y un país para ver el clima.</div>;  // Mensaje mientras se cargan los datos
  }

  function truncarADecimal(numero:number) {
    return parseFloat(numero.toString().slice(0, numero.toString().indexOf('.') + 2));
  }
  return (
    <div>
    <h2>Clima en {weather.name}</h2>
    <p>Temperatura: {truncarADecimal(weather.main.temp - 273.15)}°C</p>
    <p>Temperatura mínima: {truncarADecimal(weather.main.temp_min - 273.15)}°C</p>
    <p>Temperatura máxima: {truncarADecimal(weather.main.temp_max - 273.15)}°C</p>
  </div>
  )
}

export default CLima
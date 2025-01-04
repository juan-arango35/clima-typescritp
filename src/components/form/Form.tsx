import { ChangeEvent, FormEvent, useState } from "react";
import { countries } from "../../data/paises";
import styles from "./Form.module.css";
import { SearchType } from "../../types";
import Alert from "../alert/Alert";



type useWeatherType = {
  fecthWather: (search: SearchType) => Promise<void>
}

const Form = ({fecthWather}:useWeatherType) => {
    const [search, setSearch] = useState<SearchType>({
        city:"",
        country:""
    })
    const [alert, setAlert] = useState("")

    function handleChange(e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>){
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
     
        if(Object.values(search).includes("")){
          setAlert("Todos los campos son obligatorios")
          return
        }
        fecthWather(search)
    }
  return (
    <form className={styles.form}
    onSubmit={handleSubmit}
    >
      {alert && <Alert>{alert}</Alert>}
      <div className={styles.filed}>
        <label htmlFor="city">Ciudad : </label>
        <input type="text" id="city" name="city" placeholder="Ciudad" className={styles.input} value={search.city} onChange={handleChange} />
      </div>
      <div className={styles.filed}>
        <label htmlFor="country">País : </label>
        <select name="country" id="country" className={styles.select} value={search.country} onChange={handleChange}>
          <option value="">-- Seleccione un País --</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code} className={styles.option}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Consultar Clima"  className={styles.submit}/>
    </form>
  );
};

export default Form;

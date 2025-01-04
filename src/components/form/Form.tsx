import { ChangeEvent, useState } from "react";
import { countries } from "../../data/paises";
import styles from "./Form.module.css";
import { SearchType } from "../../types";

const Form = () => {
    const [search, setSearch] = useState<SearchType>({
        city:"",
        country:""
    })

    function handleChange(e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>){
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }
  return (
    <form className={styles.form}>
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

import { Link, useHistory } from "react-router-dom";
import "./Country.css";
 
export default function Country({ country }) {
  const {flag, name, population, region, capital, alpha3Code} = country;
  const history = useHistory();
  const change = () => {
    history.push(`/country/${alpha3Code}`);
  }
  return (
    <div className="country-container" onClick={change}>
      <div className="flag-container">
        <img src={flag} alt="" />
      </div>
      <div className="text-container">
          <h1>{name}</h1>
          <p><span>Population:</span> {population} </p>
          <p><span>Region: </span> {region} </p>
          <p><span>Capital: </span> {capital} </p>
      </div>
    </div>
  );
}

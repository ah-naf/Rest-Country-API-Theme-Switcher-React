import { Link } from "react-router-dom";
import "./Country.css";
 
export default function Country({ country }) {
  const {flag, name, population, region, capital, alpha3Code} = country;
  return (
    <Link to={`/country/${alpha3Code}`} className="country-container">
      <div className="flag-container">
        <img src={flag} alt="" />
      </div>
      <div className="text-container">
          <h1>{name}</h1>
          <p><span>Population:</span> {population} </p>
          <p><span>Region: </span> {region} </p>
          <p><span>Capital: </span> {capital} </p>
      </div>
    </Link>
  );
}

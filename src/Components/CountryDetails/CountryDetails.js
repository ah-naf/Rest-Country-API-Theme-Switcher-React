import React from "react";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, Route, useHistory, useParams } from "react-router-dom";
import Border from "../Border/Border";
import Loading from "../Loading/Loading";
import "./CountryDetails.css";

export default function CountryDetails({ allCountry }) {
  let { ID } = useParams();
  const [id, setID] = useState(ID);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [borders, setBorders] = useState([]);

  async function getData() {
    setLoading(true);
    const response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${id}`
    );
    const json = await response.json();
    setDetails(json);
    setBorders(json.borders);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, [id]);

  const back = (text) => {
    history.replace("/country/" + text);
  };

  const getCode = (c) => {
    setID(c);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <div className="back-container">
        <button onClick={() => back("")}>
          <span>
            {" "}
            <BsArrowLeft className="left-arrow" />{" "}
          </span>
          Back
        </button>
      </div>

      <div className="details">
        <div className="flag">
          <img src={details.flag} alt="" />
        </div>
        <div className="detail">
          <h1>{details.name}</h1>
          <div className="row">
            <div className="block">
              <p>
                Native Name: <span>{details.nativeName}</span>
              </p>
              <p>
                Popultaion: <span>{details.population}</span>
              </p>
              <p>
                Region: <span>{details.region}</span>
              </p>
              <p>
                Sub Region: <span>{details.subregion}</span>
              </p>
              <p>
                Capital: <span>{details.capital}</span>
              </p>
            </div>
            <div className="block">
              <p>
                Top Level Domain:
                {details.topLevelDomain.map((item, index) => {
                  if (index === details.topLevelDomain.length - 1) {
                    return <span key={index}>{item}</span>;
                  } else {
                    return <span key={index}>{item},</span>;
                  }
                })}
              </p>
              <p>
                Currencies:{" "}
                {details.currencies.map((item, index) => {
                  if (index === details.currencies.length - 1) {
                    return <span key={index}>{item.name}</span>;
                  } else {
                    return <span key={index}>{item.name},</span>;
                  }
                })}
              </p>
              <p>
                Languages:
                {details.languages.map((item, index) => {
                  if (index === details.languages.length - 1) {
                    return <span key={index}>{item.name}</span>;
                  } else {
                    return <span key={index}>{item.name},</span>;
                  }
                })}
              </p>
            </div>
          </div>
          <div className="border">
            <p>Border Countries: </p>
            <Border
              borders={borders}
              back={back}
              allCountry={allCountry}
              getCode={getCode}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { Link, Redirect, Route, useHistory } from "react-router-dom";
import CountryDetails from "../CountryDetails/CountryDetails";
import Loading from "../Loading/Loading";

export default function LINK({ item, back, getCode }) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState("");
  const history = useHistory();

  async function getName() {
    setLoading(true);
    const response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${item}`
    );
    const json = await response.json();
    setName(json.name);
    setCode(json.alpha3Code);
    setLoading(false);
  }

  useEffect(() => {
    getName();
  }, []);

  const change = () => {
    history.push(`/country/${code}`);
    getCode(code);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="border-country" onClick={change}>
      {name}
    </div>
  );
}

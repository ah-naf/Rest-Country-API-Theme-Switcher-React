import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import CountryDetails from "../CountryDetails/CountryDetails";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { createBrowserHistory } from "history";

function App() {
  const [allCountry, setAllCountry] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const history = createBrowserHistory();

  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  const filterData = (region) => {
    const temp = allCountry.filter((item) => item.region === region);
    setData(temp);
  };

  const searchFilter = (name) => {
    let n = name.toLowerCase();
    const temp = allCountry.filter(
      (item) => item.name.toLowerCase().search(n) >= 0
    );
    setData(temp);
  };

  async function getData() {
    setLoading(true);
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await response.json();
    setData(json);
    setAllCountry(json);
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={!darkMode ? "light" : ""}>
      <Header changeMode={changeMode} darkMode={darkMode} />
      <Router>
        <Switch>
          <Route path={"/country/:ID"}>
            <CountryDetails allCountry={allCountry} />
          </Route>
          <Route path={"/country"}>
            <Home
              data={data}
              filterData={filterData}
              searchFilter={searchFilter}
              darkMode={darkMode}
            />
          </Route>
          <Route path={"/"} exact>
            <Redirect to="/country" exact />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;

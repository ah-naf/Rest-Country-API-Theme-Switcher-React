import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import LINK from "./LINK";
import "./Border.css";

export default function Border({ borders, back, getCode }) {
  const [code, setCode] = useState("");

  return (
    <div className="link-container">
      {borders.map((item, index) => {
        return (
          <Route path={`/country/${code}`}>
            <LINK item={item} key={index} back={back} getCode={getCode} />
          </Route>
        );
      })}
    </div>
  );
}

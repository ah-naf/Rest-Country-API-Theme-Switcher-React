 import Country from "../Country/Country";
import "./CountryList.css";

export default function CountryList({data}) {
  

  return (
    <div className="countrylist-container">
      {/* Country Component */
        data.map((item, index) => {
          return <Country key={index} country={item} />
        })
      }  
      
    </div>
  );
}

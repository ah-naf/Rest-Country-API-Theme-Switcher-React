import { useEffect, useState } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import Loading from "../Loading/Loading";


export default function LINK({item, back}) {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);
    const [code, setCode] = useState('');
    const history = useHistory();

    async function getName() {
        setLoading(true);
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${item}`);
        const json = await response.json();
        setName(json.name);
        setCode(json.alpha3Code);
        setLoading(false);
    }

    useEffect(() => {
        getName();
    }, []);

    if(loading) {
        return <Loading />;
    }

    return (
        <Link to={`/country/${item}`} className='border-country' >{name}
        </Link>
    );
}
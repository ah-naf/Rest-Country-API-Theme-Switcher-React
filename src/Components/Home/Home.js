import './Home.css';

import Input from '../Input/Input';
import CountryList from '../CountryList/CountryList';

export default function Home({data, filterData,searchFilter, darkMode}) {
    return (
        <main  className={!darkMode ? 'light':''}>
            <div className="container">
                <Input filterData={filterData} searchFilter={searchFilter} />
                <CountryList data={data} />
            </div>
        </main>
    );

} 
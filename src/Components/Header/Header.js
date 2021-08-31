import {BiMoon} from 'react-icons/bi';
export default function Header({changeMode}) {
    return (
        <header>
        <h1>Where in the world?</h1>
        <button onClick={changeMode}>
          <span>
            <BiMoon className="moon" />
          </span>
          Dark Mode
        </button>
      </header>
    );
}
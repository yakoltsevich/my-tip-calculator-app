import {ReactComponent as LogoSvg} from './images/logo.svg';
import './App.scss';
import {Table} from "./components/Table";

function App() {
    return (
        <div className="App">
            <LogoSvg/>
            <Table/>
        </div>
    );
}

export default App;

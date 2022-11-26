import logo from './assets/logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Button, IconButton} from "@mui/material";
import {Fingerprint} from "@mui/icons-material";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {false &&
                    <p>
                        yo mahshidddddddd {3 + 5}
                    </p>}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <body className="App-body">
            <Button variant="outlined" size={"medium"} color={"secondary"} onClick={() => {
                alert("yoyoyoyoy")
            }}>Hello World</Button>
            <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint/>
            </IconButton>
            </body>
        </div>
    );
}

export default App;

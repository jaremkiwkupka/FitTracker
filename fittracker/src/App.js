import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {TopBar} from "./components/TopBar/TopBar";
import {Container} from "./components/Container/Container";
import {Diary} from "./components/Diary/Diary";
import {Summary} from "./components/Summary/Summary";
import {Author} from "./components/Author/Author";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
        <Router>
            <div className="App">
                <TopBar />
                    <Switch>
                        <Route exact path="/">
                            <Container />
                        </Route>
                        <Route path="/diary">
                            <Diary />
                        </Route>
                        <Route path="/summary">
                            <Summary />
                        </Route>
                        <Route path="/author">
                            <Author />
                        </Route>
                    </Switch>
                <Footer/>
            </div>
        </Router>
  );
}

export default App;

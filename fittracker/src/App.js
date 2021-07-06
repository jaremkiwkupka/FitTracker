import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {TopBar} from "./components/TopBar/TopBar";
import {Container} from "./components/Container/Container";
import {Menu} from "./components/Container/Menu/Menu";
import {Diary} from "./components/Diary/Diary";
import {Author} from "./components/Author/Author";

function App() {
  return (
    <div className="App">
      {/*<TopBar />*/}
      {/*<Container />*/}
        <Router>
            <TopBar />
                <Switch>
                    <Route path="/">
                        <Container />
                    </Route>
                    <Route path="/diary">
                        <Diary />
                    </Route>
                    <Route path="/author">
                        <Author />
                    </Route>
                </Switch>
        </Router>
    </div>
  );
}

export default App;

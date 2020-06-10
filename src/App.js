import React from "react";
import "./App.css";
import "./onesoil.css";
import FullChart from "./Screens/FullChart";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Screens/Home";
import With6sensors from "./Screens/With6sensors";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/fullchart" exact component={FullChart} />
                    <Route
                        path="/with6sensors"
                        exact
                        component={With6sensors}
                    />
                </div>
            </Router>
        );
    }
}

export default App;

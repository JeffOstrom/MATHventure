import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Newplayer from "./pages/Newplayer";
import Returningplayer from "./pages/Returningplayer";
import Mathtype from "./pages/Mathtype";
import Addition from "./pages/Addition";
import Correct from "./pages/Correct";
import Incorrect from "./pages/Incorrect";
import Subtraction from "./pages/Subtraction";

const App = () => 
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/newplayer" component={Newplayer} />
             <Route exact path="/returningplayer" component={Returningplayer} />
            <Route exact path="/mathtype" component={Mathtype} />
            <Route exact path="/addition" component={Addition} />
            <Route exact path="/correct" component={Correct} />
            <Route exact path="/incorrect" component={Incorrect} />
            <Route exact path="/subtraction" component={Subtraction} />
        </div>
    </Router>;

export default App;
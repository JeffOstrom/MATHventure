import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Newplayer from "./pages/Newplayer";
import Returningplayer from "./pages/Returningplayer";
import Mathtype from "./pages/Mathtype";
import Addition from "./pages/Addition";
import AdditionMedium from "./pages/AdditionMedium";
import AdditionHard from "./pages/AdditionHard";
import Correct from "./pages/Correct";
import Incorrect from "./pages/Incorrect";
import Subtraction from "./pages/Subtraction";
import SubtractionMedium from "./pages/SubtractionMedium";
import SubtractionHard from "./pages/SubtractionHard";
import Level from "./pages/Level";
import LevelAddition from "./pages/LevelAddition";
import LevelSubtraction from "./pages/LevelSubtraction";
import LevelMultiplication from "./pages/LevelMultiplication";
import Results from "./pages/Results";
import Multiplication from "./pages/Multiplication";
import MultiplicationMedium from "./pages/MultiplicationMedium";
import MultiplicationHard from "./pages/MultiplicationHard";
import Division from "./pages/Division";
import DivisionMedium from "./pages/DivisionMedium";
import DivisionHard from "./pages/DivisionHard";



const App = () => 
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/newplayer" component={Newplayer} />
            <Route exact path="/returningplayer" component={Returningplayer} />
            <Route exact path="/mathtype" component={Mathtype} />
            <Route exact path="/addition" component={Addition} />
            <Route exact path="/AdditionMedium" component={AdditionMedium} />
            <Route exact path="/AdditionHard" component={AdditionHard} />
            <Route exact path="/correct" component={Correct} />
            <Route exact path="/incorrect" component={Incorrect} />
            <Route exact path="/Subtraction" component={Subtraction} />
            <Route exact path="/SubtractionMedium" component={SubtractionMedium} />
            <Route exact path="/SubtractionHard" component={SubtractionHard} />
            <Route exact path="/Level" component={Level} />
            <Route exact path="/LevelAddition" component={LevelAddition} />
            <Route exact path="/LevelSubtraction" component={LevelSubtraction} />
            <Route exact path="/LevelMultiplication" component={LevelMultiplication} />
            <Route exact path="/Results" component={Results} />
            <Route exact path="/Multiplication" component={Multiplication} />
            <Route exact path="/MultiplicationMedium" component={MultiplicationMedium} />
            <Route exact path="/MultiplicationHard" component={MultiplicationHard} />
            <Route exact path="/Division" component={Division} />
            <Route exact path="/DivisionMedium" component={DivisionMedium} />
            <Route exact path="/DivisionHard" component={DivisionHard} />
        </div>

    </Router>;

export default App;
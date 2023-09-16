
import  Home from "./Pages/Home"
import {Route,Routes} from 'react-router-dom'
import ExercisesShow from "./Pages/ExercisesShow.jsx";
function App() {
  return (
  <Routes>
    <Route exact path="/" Component={Home}></Route>
    <Route exact path ="/showexercises" Component={ExercisesShow}></Route>
  </Routes>
  );
}

export default App;

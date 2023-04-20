import "./App.css";
import { Home, Landing, Form, Detail, About, NavBar} from "./views/index";
import { Route, useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      
      <Route exact path="/" component={Landing} />

      <Route path="/home" component={Home} />

      <Route path="/create" component={Form} />

      <Route path="/detail/:id" component={Detail} />

      <Route path="/about" component={About} />
      
      {location.pathname !== "/" && <NavBar />}
    </div>
  );
}

export default App;

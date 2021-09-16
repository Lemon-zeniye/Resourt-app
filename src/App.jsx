import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import RoomHolder from "./component/RoomHolder";
import RoomsDetail from "./component/RoomsDetail";
import "./myApp.css";
import { DataProvider } from "./component/DataContext";

const App = () => {
  return(
    <div>
      <DataProvider>
        <Router>
          <Header />
          <Route path="/" exact component={Home} /> 
          <Route path="/rooms" exact component={RoomHolder} />
          <Route path="/rooms/:id" component={RoomsDetail} />
        </Router>
      </DataProvider>
    </div>
  )
}
export default App;
import './App.css';
import Comments from './components/comments';
import Login from './components/login';
import Logout from './components/logout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ShowComments from './components/showComments';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
            <Login/>
            <Logout/>
            <ShowComments/>
          </Route>
          <Route path="/comment">
            <Comments/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;

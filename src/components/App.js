import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbarComponent/Navbar';
import Home from './homeComponent/Home';
import Create from './createComponent/Create';
import BlogDetails from './blogComponent/BlogDetails';
import NotFound from './notFoundComponent/NotFound';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/new">
            <Create />
          </Route>
          <Route path="/blog/:id">
            <BlogDetails />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

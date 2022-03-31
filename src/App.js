
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './component/Layout/Footer';
import NavBar from './component/Layout/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import User from './pages/User';

function App() {

  return (
    <Router>
      <div className=" min-h-screen flex flex-col">
        <NavBar />
        <main className='flex-grow mx-auto px-3 pb-12 '>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/user/:id'>
              <User />
            </Route>
            <Route path='*' >
              <NotFound />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

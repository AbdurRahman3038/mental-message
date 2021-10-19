import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Account from './components/Account/Account';
import Footer from './components/Footer/Footer';
import FreeConsultation from './components/FreeConsultation/FreeConsultation';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Authprovider from './context/AuthProvider';

function App() {
  return (
    <div>
      <Authprovider>

        <BrowserRouter>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute path="/free-consultation">
              <FreeConsultation></FreeConsultation>
            </PrivateRoute>

            <PrivateRoute path="/account">
              <Account></Account>
            </PrivateRoute>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </Authprovider>
    </div>

  );
}

export default App;

import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from './services/users';
import Auth from './views/Auth/Auth';
import ProductPage from './views/Product/ProductPage';
import ProductDetails from './views/Product/ProductDetails';
import AddProduct from './views/Product/AddProduct';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './views/Footer/Footer';
import Header from './views/Header/Header';
import ProtectedRoute from './utils/ProtectedRoute';
import EditProduct from './views/Product/EditProduct';
import EditUserView from './views/User/EditUserView';
import UserView from './views/User/UserView';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <div className="background">
        <br></br>
        <BrowserRouter>
          {/* HOME page */}
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => <ProductPage {...routeProps} user={currentUser} />}
            ></Route>

            {/* SIGN IN/SIGN UP */}
            <Route exact path="/sign-in">
              {currentUser && (
                <>
                  <Redirect to="/" />
                </>
              )}
              {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
            </Route>

            {/* Add Page */}
            <ProtectedRoute exact path="/products/new" currentUser={currentUser}>
              <AddProduct user={currentUser} />
            </ProtectedRoute>

            {/* View Product */}
            <Route exact path="/products/:id">
              <ProductDetails user={currentUser} />
            </Route>

            {/* View Profile/ Edit own Profile */}
            <ProtectedRoute exact path="/profile/:id/edit" currentUser={currentUser}>
              <EditUserView />
            </ProtectedRoute>

            {/* Profile */}
            <Route exact path="/profile/:id">
              <UserView currentUser={currentUser} />
            </Route>

            {/* About Us */}
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>

            {/* Edit Product */}

            <Route exact path="/products/:id/edit" currentUser={currentUser}>
              <EditProduct currentUser={currentUser} />
            </Route>
          </Switch>
        </BrowserRouter>
        <Header currentUser={currentUser} />
        <Footer />
      </div>
    </div>
  );
}

export default App;

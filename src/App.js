import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Navbar,Footer } from './Component';
import {HomePage,ProductsPage,SingleProduct,AboutPage,CartPage,CheckoutPage,ErrorPage, PrivateRoute,AuthWrapper} from './pages'
function App() {
  return (
    <div className="App">
     <AuthWrapper>
     <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/about'>
            <AboutPage />
          </Route>
          <Route exact path='/cart'>
            <CartPage />
          </Route>
          <Route exact path='/products'>
            <ProductsPage />
          </Route>
          <Route exact path='/products/:id' children={<SingleProduct />} />
          <PrivateRoute exact path='/checkout'>
            <CheckoutPage />
          </PrivateRoute>
          <Route exact path='*'>
            <ErrorPage />
          </Route>
            
        </Switch>
        <Footer />
      </Router>
     </AuthWrapper>
    </div>
  );
}

export default App;

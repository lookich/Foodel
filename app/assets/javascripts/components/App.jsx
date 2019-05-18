import React from 'react';
import ProductAdd from './ProductAdd';
import ProductList from './ProductList';
import ProductInfo from './ProductInfo';
import ProductEdit from './ProductEdit';
import { Router, Route, NavLink, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

//Configuration a nav bar with 'Navigation' and 'Main' components
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="container">
          <Navigation />
          <Main />
        </div>
      </Router>
    );
  }
}

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to="/products">Products</NavLink></li>
      <li><NavLink to="/products/new">Add Product</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={ProductList} />
    <Route exact path="/products" component={ProductList} />
    <Route exact path="/products/new" component={ProductAdd} />
    <Route exact path="/products/:id" component={ProductInfo} />
    <Route exact path="/products/:id/edit" component={ProductEdit} />
  </Switch>
);

export default App;

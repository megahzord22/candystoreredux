import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store'
import Cart from './components/Cart'
import App from './App'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Routes = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Provider>
    </Router>
  )
}

export default Routes;

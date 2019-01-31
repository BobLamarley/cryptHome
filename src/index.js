import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fontAwesome/css/font-awesome.min.css'
import Home from './components/home/home';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/menu/menu';
import './components/menu/menu.css';
import { Link } from "react-router-dom";
import CryptoList from './components/cryptoList';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/cryptolist" component={CryptoList} />
                <Menu>
                    <Link id="home" to="/">Home</Link>
                    <Link id="cryptoList" to="/cryptolist">cryptolist</Link>
                </Menu>  
            </div>    
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
    module.hot.accept();
}

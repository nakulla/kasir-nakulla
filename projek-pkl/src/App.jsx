import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavbarComponent from './component/NavbarComponent';
import Home from './pages/Home';
import Sukses from './pages/Sukses'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavbarComponent/>
                <main>
                    <Switch>
                        <Route path="/" exact={true} component={Home}/>
                        <Route path="/Sukses" exact={true} component={Sukses}/>
                    </Switch>
                </main>
            </BrowserRouter>
        );
    }
}

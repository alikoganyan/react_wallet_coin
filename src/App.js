import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import CreateWallet from  './containers/CreateWallet';
import SendToken from  './containers/SendToken';
import NavBar from './components/Header/Nav';
import Footer from './components/Footer/Footer';

export default class App extends React.Component {
    render() {
        const props = this.props;
        return (
            <div>
                <NavBar { ...props }/>
                <Switch>
                    <Route exact path='/' component={CreateWallet}/>
                    <Route path='/send_token' component={SendToken}/>
                    <Redirect to="/"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

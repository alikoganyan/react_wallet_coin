import React ,{ Component } from 'react';
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class WalletNavbar extends Component {
    render() {
        return (
            <Nav tabs>
                <NavItem style={{margin:"0 auto"}}>
                    <NavLink href="/" active={this.props.match.path !== "/"}>CREATE WALLET</NavLink>
                </NavItem>
                <NavItem style={{margin:"0 auto"}}>
                    <NavLink href="/send_token" active={this.props.match.path !== "/send_token"}>SEND TOKENS</NavLink>
                </NavItem>
            </Nav>
        );
    }
}
import React ,{ Component } from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

export default class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/" style={{margin:"0 auto"}}>
                        LOGO
                    </NavbarBrand>
                </Navbar>
            </div>
        );
    }
}
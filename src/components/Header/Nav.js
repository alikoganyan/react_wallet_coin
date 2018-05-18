import React ,{ Component } from 'react';


export default class Nav extends Component {
    constructor(props){
        super(props);
        const {pathname} = window.location;
        this.state = {
            create: pathname === '/'? "active":"",
            send: pathname === '/send_token'? "active":"",
        };
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-info">
                <div className="container">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar3SupportedContent">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse text-center justify-content-center" id="navbar3SupportedContent">
                        <a className="navbar-brand" href={"/"}>
                            <i className="fa d-inline fa-lg fa-cloud"/>
                            <b>&nbsp;TokenWallet
                                <br/></b>
                        </a>
                        <ul className="navbar-nav">
                            <a className={`ml-3 btn navbar-btn btn-light ${this.state.create}`} href={"/"}>Create Wallet
                                <br/> </a>
                            <a className={`ml-3 btn navbar-btn btn-light ${this.state.send}`} href={"/send_token"}>Send Tokens
                                <br/></a>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
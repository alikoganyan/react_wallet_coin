import React ,{ Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="text-white bg-info py-4 w-footer">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-md-9">
                            <p className="lead">Sign up to our newsletter for
                                the latest news</p>
                            <form className="form-inline">
                                <div className="form-group">
                                    <input type="email" className="form-control"
                                           placeholder="Your e-mail here"/>
                                </div>
                                <button type="submit"
                                        className="btn ml-3 btn-light">Subscribe
                                </button>
                            </form>
                        </div>
                        <div className="col-4 col-md-1 align-self-center">
                            <a href="https://www.facebook.com" target="_blank">
                                <i className="fa fa-fw fa-facebook fa-3x text-white"/>
                            </a>
                        </div>
                        <div className="col-4 col-md-1 align-self-center">
                            <a href="https://twitter.com" target="_blank">
                                <i className="fa fa-fw fa-twitter fa-3x text-white"/>
                            </a>
                        </div>
                        <div className="col-4 col-md-1 align-self-center">
                            <a href="https://www.instagram.com" target="_blank">
                                <i className="fa fa-fw fa-instagram text-white fa-3x"/>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-3 text-center">
                            <p>© Copyright 2018
                                <br/>&nbsp;TokenWallet - All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

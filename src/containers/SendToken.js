import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    FormGroup,
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import {
    walletState,
    setDefaultTokenValues,
    sendToken

} from "../action/token";

class SendToken extends Component{
    constructor(props){
        super(props);
        this.state = {
            step:1,
            privateKey: "",
            addressTo: "",
            amountToSend: "",
            modal:false,
            modalMessage:""
        };
    };
    /*Lifecycle --start*/
    componentWillReceiveProps(nextProps){
        const { tokenNotFount , walletStateSuccess, sendTokenSuccess } = nextProps.token;
        if(tokenNotFount){
            this.setState({
                modalMessage: "Key not Found"
            });
            this.toggle();
            this.props.setDefaultTokenValues();
        }
        if(sendTokenSuccess){
            this.setState({
                modalMessage: "Token has been sent"
            });
            this.toggle();
            this.props.setDefaultTokenValues();
        }
        if( walletStateSuccess ){
            this.props.setDefaultTokenValues();
            this.setState({
                step: 2
            });
        }
    }
    /*Lifecycle --start*/
    openWallet = (e) => {
        e.preventDefault();
        if(!this.privateKey.value){
            this.setState({
                modalMessage:'Please fill the "Private Key" field!'
            });
            this.toggle();
            return;
        }

        let params = {
            private_key : this.privateKey.value,
            public_key: "public_" + this.privateKey.value,
        };

        this.props.walletState(params);
    };

    send = (e) => {
        e.preventDefault();
        let params = {
            addressTo: this.addressTo.value,
            amountToSend: this.amountToSend.value
        };
        this.props.sendToken(params);
        this.addressTo.value = "";
        this.amountToSend.value = "";
        this.setState({
            addressTo: "",
            amountToSend: "",
        })
    };

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render(){
        const { item } = this.props.token;
        return(
            <section>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"> </div>
                            <div className="col-md-6">
                                <div className="card text-white p-5 bg-info border-info">
                                    { this.state.step === 1 &&
                                    <div className="card-body">
                                        <h1 className="mb-4">Send tokens
                                            <br/>
                                        </h1>
                                        <form
                                            action="https://formspree.io/YOUREMAILHERE">
                                            <FormGroup>
                                                <Input type="text" name="private_key" defaultValue={this.state.privateKey}  innerRef={key => (this.privateKey = key )} id="private_key" placeholder="Private key" />
                                            </FormGroup>
                                            <button type="submit"
                                                    className="btn btn-warning"
                                                    onClick={(e) => {
                                                        this.openWallet(e)
                                                    }}>Open Wallet
                                            </button>
                                        </form>
                                        <p className="">Send Tokens Description
                                            <br/>
                                        </p>
                                    </div>
                                    }
                                    { this.state.step === 2 &&
                                        <div className="card-body">
                                            <h1 className="mb-4">Send tokens
                                                <br/></h1>
                                            <FormGroup>
                                                <Input type="text" name="address_to" id="address_to" placeholder="Address to..." defaultValue={this.state.addressTo}  innerRef={key => (this.addressTo = key )} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="text" name="amount" id="amount" placeholder="Amount to send"  defaultValue={this.state.amountToSend}  innerRef={key => (this.amountToSend = key )} />
                                            </FormGroup>
                                            <p className="">Your balance: { item.params.tokens }
                                                <br/></p>
                                            <p className="">Your address: { item.params.is_node ? item.params.node_address: ""} </p>
                                            <Button onClick={(e)=>{this.send(e)}} color="warning">SEND</Button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={()=>{this.toggle()}} className={this.props.className}>
                    <ModalHeader toggle={()=>{this.toggle()}} className={"bg-info"}>Send tokens</ModalHeader>
                    <ModalBody className={"bg-info"}>
                        {this.state.modalMessage}
                    </ModalBody>
                    <ModalFooter className={"bg-info"}>
                        <Button color="warning" onClick={()=>{this.toggle()}}>Ok</Button>
                    </ModalFooter>
                </Modal>
            </section>
        );
    }
}

export default connect(
    (state) => ({
        token: state.token,
    }),
    (dispatch) => ({
        walletState: (params) => dispatch(walletState(params)),
        sendToken: (params) => dispatch(sendToken(params)),
        setDefaultTokenValues: () => dispatch(setDefaultTokenValues()),
    }),
)(SendToken);

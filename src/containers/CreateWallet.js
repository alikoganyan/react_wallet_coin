import React , { Component}from 'react';
import {connect} from 'react-redux';
import {
    Button,
    FormGroup,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

import {
    createWallet,
    setDefaultWalletsValues
} from "../action/wallet";

class CreateWallet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            walletName: '',
            modal:false,
        };
    }

    /*Lifecycle --start*/
    componentWillReceiveProps(nextProps){
        const { createWalletSuccess } = nextProps.wallet;
        if(createWalletSuccess){
            this.toggle();
            this.props.setDefaultWalletsValues();
        }
    }
    /*Lifecycle --end*/
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    };
    create = (e) => {
        e.preventDefault();
        this.props.createWallet();
    };

    render(){
        const wallet = this.props.wallet.item;
        return(
            <div className="py-5 text-white text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-dark">App Title</h1>
                            <p className="lead mb-4 text-dark">App description
                                <br/> </p>
                            <form className="form-inline justify-content-center">
                                <button type="submit" className="btn btn-lg btn-warning" onClick={(e)=>{this.create(e)}}>Create wallet
                                    <br/> </button>
                            </form>
                        </div>
                    </div>
                    <Modal isOpen={this.state.modal} toggle={()=>{this.toggle()}} className={this.props.className}>
                        <ModalHeader toggle={()=>{this.toggle()}} className={"bg-info"}>Create wallet</ModalHeader>
                        <ModalBody className={"bg-info"} >
                            <FormGroup>
                                <div>
                                    <Input defaultValue={ wallet.params.private_key } disabled/>
                                </div>
                            </FormGroup>
                            <p>
                                Create Wallet description
                                <br/>
                            </p>
                        </ModalBody>
                        <ModalFooter className={"bg-info"}>
                            <Button color="warning" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        wallet: state.wallet,
    }),
    (dispatch) => ({
        createWallet: () => dispatch(createWallet()),
        setDefaultWalletsValues: () => dispatch(setDefaultWalletsValues()),
    }),
)(CreateWallet);
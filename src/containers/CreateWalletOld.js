import React , { Component}from 'react';
import {connect} from 'react-redux';
import {
    Container,
    Row,
    Col,
    Button,
    FormGroup,
    Input,
    ListGroup,
    ListGroupItem,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import WalletNavbar from '../components/WalletNavbar';
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
        const { tokenNotFound } = nextProps.token;
        if(tokenNotFound){

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
        // if(!this.walletName.value){
        //     return;
        // }
        // this.setState({
        //     walletName: this.walletName.value,
        // });
        this.props.createWallet();
    };

    render(){
        const wallet = this.props.wallet.item;
        return(
            <section>
                <Container>
                    <Row>
                        <Col xs="4" sm="4" style={{margin:"5% auto"}}>
                            <div>
                                {/*<FormGroup>
                                    <Input type="text"
                                           name="wallet_name"
                                           defaultValue={this.state.walletName}
                                           innerRef={key => (this.walletName = key )}
                                           id="wallet_name"
                                           placeholder="Wallet Name" />
                                </FormGroup>*/}
                                <Button style={{minWidth:"100%"}} onClick={(e)=>{this.create(e)}}>
                                    CREATE WALLET
                                </Button>
                            </div>
                        </Col>
                        {/*{ (this.props.wallet && this.props.wallet.params)
                        &&
                        <Col xs="12" sm="12">
                            <ListGroup  style={{margin:"0 34%"}}>
                                <ListGroupItem>Private Id: <span>{ this.props.wallet.params.private_key }</span></ListGroupItem>
                                <ListGroupItem>Public Id: <span>{ this.props.wallet.params.private_key }</span></ListGroupItem>
                            </ListGroup>
                        </Col>
                        }*/}
                    </Row>
                </Container>
                <Modal isOpen={this.state.modal} toggle={()=>{this.toggle()}} className={this.props.className}>
                    <ModalHeader toggle={()=>{this.toggle()}}>Modal title</ModalHeader>
                    <ModalBody>
                        <ListGroup>
                            <ListGroupItem>Private Id: <span>{ wallet.params.private_key }</span></ListGroupItem>
                            <ListGroupItem>Public Id: <span>{ wallet.params.private_key }</span></ListGroupItem>
                        </ListGroup>
                    </ModalBody>
                </Modal>
            </section>
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
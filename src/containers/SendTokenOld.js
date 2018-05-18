import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Button,
    ListGroup,
    ListGroupItem,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';
import WalletNavbar from '../components/WalletNavbar';

class SendToken extends Component{
    constructor(props){
        super(props);
        this.state = {
            step:1,
            privateKey:"",
            addressTo:"",
            amount:0,
            modal:false
        };
    };

    openWallet = (e) => {
        e.preventDefault();
        if(!this.privateKey.value){
            this.toggle();
        }
        this.setState({
            privateKey: this.privateKey.value
        });
    };


    send = (e) => {
        e.preventDefault();
    };

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render(){
        return(
            <section>
                {this.state.step === 1 && <Container>
                    <Form name="form_step_1">
                        <Row>
                            <Col xs="6" sm="6" style={{margin:"5% auto"}}>
                                <FormGroup>
                                    <Input type="text" name="private_key" defaultValue={this.state.privateKey}  innerRef={key => (this.privateKey = key )} id="private_key" placeholder="Private key" />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="12">
                                <Button style={{margin:"0 44.5%"}} onClick={(e)=>{this.openWallet(e)}} >OPEN WALLET</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>}
                {this.state.step === 2 && <Container>
                    <Form name="form_step_2">
                        <Row>
                            <Col xs="6" sm="6" style={{margin:"5% auto"}}>
                                <FormGroup>
                                    <Input type="text" name="address_to" id="address_to" placeholder="Address to..." />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="amount" id="amount" placeholder="Amount to send" />
                                </FormGroup>
                                <ListGroup style={{margin:"5% auto"}}>
                                    <ListGroupItem>Your Balance: <span>{"XXX"}</span></ListGroupItem>
                                    <ListGroupItem>Your ADDRESS: <span>{"XXXXXX"}</span></ListGroupItem>
                                </ListGroup>
                            </Col>
                            <Col xs="12" sm="12">
                                <Button style={{margin:"0 47%"}} onClick={(e)=>{this.send(e)}}>SEND</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>}
                <Modal isOpen={this.state.modal} toggle={()=>{this.toggle()}} className={this.props.className}>
                    <ModalHeader toggle={()=>{this.toggle()}}>Modal title</ModalHeader>
                    <ModalBody>
                        Modal
                    </ModalBody>
                </Modal>
            </section>
        );
    }
}
export default SendToken;
import React, {Component} from 'react'
import { Modal, ButtonGroup, Button } from 'react-bootstrap'
import ClientForm from '../components/ClientForm'
import { connect } from 'react-redux'
import { addClient} from '../actions/actionCreators'
import {toast} from 'react-toastify'
import {API_URL, API_CLIENT} from '../config/api-settings'

class NewClientModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: props.show
        }
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() { 
        this.setState({ show: false })
    }

    handleShow() { 
        this.setState({ show: true })
    }

    componentWillReceiveProps(props) { 
        this.setState({show: props.show})
    }

    saveNewClientAction() {
        return (clientData) => {
            fetch(`${API_URL}${API_CLIENT}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ client: clientData})
              })
                .then(res => {
                    res.json().then(newClientData => {
                       this.props.addNewClient(newClientData)
                        toast("Saved successfully", {type: "success"})
                        this.handleClose()
                    })
                })
                .catch(err => {
                    console.log(err)
                    toast("Couldn't save. Try again", {type: "error"})
                });
        } 
    }

    render() {
        return (
            <div className="static-modal">
                <Modal show={this.state.show}>
                    <Modal.Header>
                    <Modal.Title>New client</Modal.Title>
                    </Modal.Header>

                    <Modal.Body><ClientForm client={{}} onSave={this.saveNewClientAction()}/></Modal.Body>

                    <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      addNewClient: (clientData) => dispatch(addClient(clientData))
    }
}

export default connect(null, mapDispatchToProps, null, { withRef: true })(NewClientModal)
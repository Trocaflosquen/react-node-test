import React, {Component} from 'react'
import { Modal, ButtonGroup, Button } from 'react-bootstrap'
import ClientForm from '../components/ClientForm'

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

    render() {
        return (
            <div className="static-modal">
                <Modal show={this.state.show}>
                    <Modal.Header>
                    <Modal.Title>New client</Modal.Title>
                    </Modal.Header>

                    <Modal.Body><ClientForm client={{}}/></Modal.Body>

                    <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default NewClientModal

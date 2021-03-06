import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fillClientList, removeClient } from '../actions/actionCreators'
import { ListGroupItem, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'
import { from } from 'rxjs';
import ClientElement from '../components/ClientElement'
import NewClientModal from './NewClientModal'
import { withRouter } from "react-router-dom";
import {API_URL, API_CLIENT} from '../config/api-settings'

class ClientsListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clients: this.props.clients.clients || []
        }
        this.showModal = false;
    }

    removeClientAction(id) {
        return () => {
            const removeClientPromise = () =>
            fetch(`${API_URL}${API_CLIENT}`+id, {
                method: 'delete'
              })
                .then(res => res.json())
                .catch(err => console.log);
          
            from(removeClientPromise())
            .subscribe(() => {
                const removedIndex = this.state.clients.findIndex(client => client.id == id)
                this.setState({clients: [...this.state.clients.filter(client => client.id != id)] })
                this.props.removeClient(id)
            })
        } 
    }

    componentWillMount() { 
        if(this.state.clients.length === 0) { 
            const getClients = () =>
            fetch(`${API_URL}/`)
                .then(res => res.json())
                .catch(err => console.log);
            
            from(getClients())
            .subscribe(clients => { 
                this.setState({clients: clients})
                this.props.fillClientList(clients)
            })
        }    
    }

    componentWillReceiveProps(nextProps) { 
        if(this.props.clients !== nextProps.clients) {
            this.setState(nextProps.clients)
        }    
    }

    handleModal() {
        this.showModal
    }

    renderClientElements() { console.log(this.state.clients)
        return (this.state.clients && this.state.clients.length > 0) ? (
                this.state.clients.map(
                    (client, index) =>
                        (
                            <div className="row" key={client.id}>
                                <div className="col-xs-10">
                                    <ListGroupItem className="client-list-element" onClick={ () => this.props.history.push("/client/"+client.id)}>
                                        <ClientElement {...client}/>
                                    </ListGroupItem>
                                </div>
                                <div className="col-xs-2 list-button">    
                                    <ButtonGroup>
                                        <Button onClick={this.removeClientAction(client.id)}>
                                            🔪
                                        </Button>
                                    </ButtonGroup>
                                </div>    
                            </div>
                        )
                    )
        ) : (<p>Clients empty</p>)
    }  

    render() { 
        return (
            <div>
                <NewClientModal show={this.showModal} ref={"newClientModal"}/>
                <ButtonToolbar className="main-buttons">
                    <Button bsStyle="success" onClick={() => this.refs.newClientModal.getWrappedInstance().handleShow()}>Add client ➕</Button>
                </ButtonToolbar>
                {this.renderClientElements()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      clients : state
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
      fillClientList: (clients) => dispatch(fillClientList(clients)),
      removeClient: (clientId) => dispatch(removeClient(clientId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientsListContainer))
import React, {Component} from 'react'
import { ListGroupItem, Glyphicon, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'
import { ActionLink } from '../components/ActionLink'
import { from } from 'rxjs';
import ClientElement from '../components/ClientElement'
import { withRouter } from "react-router-dom";
import {API_URL, API_CLIENT} from '../config/api-settings'

class ClientsListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clients: []
        }
    }

    removeClientAction(id) {
        return () => {
            const removeClient = () =>
            fetch(`${API_URL}${API_CLIENT}`+id, {
                method: 'delete'
              })
                .then(res => res.json())
                .catch(err => console.log);
          
            from(removeClient())
            .subscribe(() => {
                const removedIndex = this.state.clients.findIndex(client => client.id == id)
                this.setState({clients: [...this.state.clients.filter(client => client.id != id)] })
            })
        } 
    }

    componentWillMount() { 
        const getClients = () =>
          fetch(`${API_URL}/`)
            .then(res => res.json())
            .catch(err => console.log);
          
          from(getClients())
          .subscribe(clients => { 
            this.setState({clients: clients})
          })
      }

    render() { 
        return (
                this.state.clients.map(
                    client =>
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
                                            <Glyphicon glyph="trash" />
                                        </Button>
                                    </ButtonGroup>
                                </div>    
                            </div>
                        )
                    )
        )
    }
}

export default withRouter(ClientsListContainer)
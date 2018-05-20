import React, {Component} from 'react'
import { from } from 'rxjs';
import ClientForm from './ClientForm'
import {API_URL, API_CLIENT} from '../config/api-settings'
import {toast} from 'react-toastify'

class Client extends Component {

    constructor(props) {
        super(props)
        this.clientIdToRequest = props.match.params.clientId
        this.state = {
            client: {}
        }
    }

    componentWillMount() {
        const getClient = id =>
          fetch(`${API_URL}${API_CLIENT}`+id)
            .then(res => res.json())
            .catch(err => console.log);
          
          from(getClient(this.clientIdToRequest))
          .subscribe(client => { 
            this.setState({client: client})
          })

    }

    updateClientAction(id) { 
        return (clientData) => { 
            fetch(`${API_URL}${API_CLIENT}`+id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ client: clientData})
              })
                .then(res => {
                    res.json()
                    toast("Saved successfully", {type: "success"})
                })
                .catch(err => {
                    console.log(err)
                    toast("Couldn't save. Try again", {type: "error"})
                });
        } 
    }



    render() {
        return (
            <ClientForm client={this.state.client} onSave={this.updateClientAction(this.state.client.id)}/>
        )
    }
}

export default Client


import React, { Component } from 'react'
import { Glyphicon, FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap'
import ClientElement from './ClientElement';


class ClientForm extends Component {

    constructor(props) { 
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            name: '',
            phone: '',
            username: '',
            website: '',
            email: '',
            company: {
                bs: '',
                catchPhrase: '',
                name: ''
            },
            address: {
                city: '',
                street: '',
                suite: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: ''
                }
            }
        }
    }

    componentWillReceiveProps(nextProps) { 
        this.setState(nextProps.client);
    }

    handleChange(event) {
        switch (event.target.id) {
            case 'name':
                this.setState({name: event.target.value })
                break;
            case 'username':
                this.setState({username: event.target.value })
                break;
            case 'email':
                this.setState({email: event.target.value })
                break;
            case 'phone':
                this.setState({phone: event.target.value })
                break;
            case 'website':
                this.setState({website: event.target.value })
                break;                
        }
        
    }

    doSaveAction = () => {
        this.props.onSave(this.state)
    }

    // componentWillMount() {
    //     const getClient = id =>
    //       fetch(`${API_URL}${API_CLIENT}`+id)
    //         .then(res => res.json())
    //         .catch(err => console.log);
          
    //       from(getClient(this.clientIdToRequest))
    //       .subscribe(client => { 
    //         this.setState({client: client})
    //       })
    //   }

    render() {
        return (
            <form>
                <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        type="text"
                        id="name"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={this.handleChange}
                    />
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                        type="text"
                        id="username"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.handleChange}
                    />
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        type="email"
                        id="email"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <ControlLabel>Phone</ControlLabel>
                    <FormControl
                        type="phone"
                        id="phone"
                        value={this.state.phone}
                        placeholder="Phone"
                        onChange={this.handleChange}
                    />
                    <ControlLabel>Website</ControlLabel>
                    <FormControl
                        type="text"
                        id="website"
                        value={this.state.website}
                        placeholder="Website"
                        onChange={this.handleChange}
                    />
                    <Button bsStyle="success" onClick={this.doSaveAction}>Save 💾</Button>
                </FormGroup>
            </form>
        )
    }
}

export default ClientForm
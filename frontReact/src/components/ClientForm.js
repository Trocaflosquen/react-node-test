import React, { Component } from 'react'
import { FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap'
import CompanyForm from './CompanyForm'
import AddressForm from './AddressForm';

class ClientForm extends Component {

    constructor(props) { 
        super(props)
        this.clientId = this.props.client.id
    }

    doSaveAction = (e) => {
        e.preventDefault()
        const clientData = {
            id: this.clientId,
            name: this.name.value,
            phone: this.phone.value,
            username: this.username.value,
            website: this.website.value,
            email: this.email.value,
            company: {
                bs: this.companyForm.bs.value,
                catchPhrase: this.companyForm.catchPhrase.value,
                name: this.companyForm.name.value
            },
            address: {
                city: this.addressForm.city.value,
                street: this.addressForm.street.value,
                suite: this.addressForm.suite.value,
                zipcode: this.addressForm.zipcode.value,
                geo: {
                    lat: '',
                    lng: ''
                }
            }
        }
        this.props.onSave(clientData)
    }

    render() {
        return (
            <form onSubmit={this.doSaveAction}>
                <FormGroup>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        type="text"
                        id="name"
                        defaultValue={this.props.client.name || "" }
                        placeholder="Name"
                        inputRef={input => this.name = input}
                    />
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                        type="text"
                        id="username"
                        defaultValue={this.props.client.username || "" }
                        placeholder="Username"
                        inputRef={input => this.username = input}
                    />
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        type="email"
                        id="email"
                        defaultValue={this.props.client.email || "" }
                        placeholder="Email"
                        inputRef={input => this.email = input}
                    />
                    <ControlLabel>Phone</ControlLabel>
                    <FormControl
                        type="phone"
                        id="phone"
                        defaultValue={this.props.client.phone || "" }
                        placeholder="Phone"
                        inputRef={input => this.phone = input}
                    />
                    <ControlLabel>Website</ControlLabel>
                    <FormControl
                        type="text"
                        id="website"
                        defaultValue={this.props.client.website || "" }
                        placeholder="Website"
                        inputRef={input => this.website = input}
                    />
                    <CompanyForm ref={companyForm => this.companyForm = companyForm} {...this.props.client.company}/>
                    <AddressForm ref={addressForm => this.addressForm = addressForm} {...this.props.client.address}/>
                    <Button bsStyle="success" type="submit">Save 💾</Button>
                </FormGroup>
            </form>
        )
    }
}

export default ClientForm
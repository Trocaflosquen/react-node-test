import React, { Component } from 'react'
import { FormGroup, Button } from 'react-bootstrap'
import FormElement from './FormElement'
import CompanyForm from './CompanyForm'
import AddressForm from './AddressForm';

class ClientForm extends Component {

    constructor(props) { 
        super(props)
        this.clientId = this.props.client.id || null
        this.formElements = [
            {
                propertyName: "name",
                placeholder: "Name",
                defaultValue: this.props.client.name || "",
                inputRef: input => this.name = input
            },
            {
                propertyName: "phone",
                placeholder: "Phone",
                defaultValue: this.props.client.phone || "",
                inputRef: input => this.phone = input
            },
            {
                propertyName: "username",
                placeholder: "Username",
                defaultValue: this.props.client.username || "",
                inputRef: input => this.username = input
            },
            {
                propertyName: "email",
                placeholder: "Email",
                defaultValue: this.props.client.email || "",
                inputRef: input => this.email = input
            },
            {
                propertyName: "website",
                placeholder: "Website",
                defaultValue: this.props.client.website || "",
                inputRef: input => this.website = input
            }
        ]
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
                // geo: {
                //     lat: '',
                //     lng: ''
                // }
            }
        }
        this.props.onSave(clientData)
    }

    render() {
        return (
            <form onSubmit={this.doSaveAction}>
                <FormGroup>
                    {this.formElements.map((formElement, index) => <FormElement key={index} {...formElement} />)}
                    <CompanyForm ref={companyForm => this.companyForm = companyForm} {...this.props.client.company}/>
                    <AddressForm ref={addressForm => this.addressForm = addressForm} {...this.props.client.address}/>
                    <Button bsStyle="success" type="submit">Save 💾</Button>
                </FormGroup>
            </form>
        )
    }
}

export default ClientForm
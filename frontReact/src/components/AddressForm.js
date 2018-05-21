import React, { Component } from 'react'
import FormElement from './FormElement'

class AddressForm extends Component {

    constructor(props) {
        super(props)
        this.formElements = [
            {
                propertyName: "city",
                placeholder: "City",
                defaultValue: this.props.city || "",
                inputRef: input => this.city = input
            },
            {
                propertyName: "street",
                placeholder: "Street",
                defaultValue: this.props.street || "",
                inputRef: input => this.street = input
            },
            {
                propertyName: "suite",
                placeholder: "Suite",
                defaultValue: this.props.suite || "",
                inputRef: input => this.suite = input
            },
            {
                propertyName: "zipcode",
                placeholder: "Zipcode",
                defaultValue: this.props.zipcode || "",
                inputRef: input => this.zipcode = input
            }
        ]
    }

    render() {
        return (
            <div>
                <h3>Address</h3>
                {this.formElements.map((formElement, index) => <FormElement key={index} {...formElement} />)}
            </div>
        )
    }
}

export default AddressForm
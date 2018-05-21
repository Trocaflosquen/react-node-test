import React, { Component } from 'react'
import FormElement from './FormElement'

class CompanyForm extends Component {

    constructor(props) {
        super(props)
        this.formElements = [
            {
                propertyName: "bs",
                placeholder: "BS",
                defaultValue: this.props.bs || "",
                inputRef: input => this.bs = input
            },
            {
                propertyName: "catchPhrase",
                placeholder: "Catch Phrase",
                defaultValue: this.props.catchPhrase || "",
                inputRef: input => this.catchPhrase = input
            },
            {
                propertyName: "name",
                placeholder: "Company Name",
                defaultValue: this.props.name || "",
                inputRef: input => this.name = input
            }
        ]
    }

    render() {
        return (
            <div>
                {this.formElements.map((formElement, index) => <FormElement key={index} {...formElement} />)}
            </div>
        )
    }
}

export default CompanyForm
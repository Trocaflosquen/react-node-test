import React, { Component } from 'react'
import { FormControl, ControlLabel } from 'react-bootstrap'

class AddressForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Address</h3>
                <ControlLabel>City</ControlLabel>
                <FormControl
                    type="text"
                    id="city"
                    placeholder="City"
                    defaultValue={this.props.city || ""}
                    inputRef={input => this.city = input}
                />
                <ControlLabel>Street</ControlLabel>
                <FormControl
                    type="text"
                    id="street"
                    placeholder="Catch Phrase"
                    defaultValue={this.props.street || ""}
                    inputRef={input => this.street = input}
                />
                <ControlLabel>Suite</ControlLabel>
                <FormControl
                    type="text"
                    id="suite"
                    placeholder="Catch Phrase"
                    defaultValue={this.props.suite || ""}
                    inputRef={input => this.suite = input}
                />
                <ControlLabel>Zipcode</ControlLabel>
                <FormControl
                    type="text"
                    id="zipcode"
                    placeholder="Zipcode"
                    defaultValue={this.props.zipcode || ""}
                    inputRef={input => this.zipcode = input}
                />
            </div>
        )
    }
}

export default AddressForm
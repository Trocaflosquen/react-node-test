import React, { Component } from 'react'
import { FormControl, ControlLabel } from 'react-bootstrap'

class CompanyForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Company</h3>
                <ControlLabel>BS</ControlLabel>
                <FormControl
                    type="text"
                    id="bs"
                    placeholder="BS"
                    defaultValue={this.props.bs || ""}
                    inputRef={input => this.bs = input}
                />
                <ControlLabel>Catch Phrase</ControlLabel>
                <FormControl
                    type="text"
                    id="catchPhrase"
                    placeholder="Catch Phrase"
                    defaultValue={this.props.catchPhrase || ""}
                    inputRef={input => this.catchPhrase = input}
                />
                <ControlLabel>Company Name</ControlLabel>
                <FormControl
                    type="text"
                    id="name"
                    placeholder="Name"
                    defaultValue={this.props.name || ""}
                    inputRef={input => this.name = input}
                />
            </div>
        )
    }
}

export default CompanyForm
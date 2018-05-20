import React, { Component } from 'react'
import { FormControl, ControlLabel } from 'react-bootstrap'

class CompanyForm extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            bs: '',
            catchPhrase: '',
            name: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...nextProps })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldupdate", nextState)
        console.log(this.state)
        return nextState !== this.state
    }

    handleChange(event) {
        switch (event.target.id) {
            case 'bs':
                this.setState({ bs: event.target.value })
                break;
            case 'catchPhrase':
                this.setState({ catchPhrase: event.target.value })
                break;
            case 'name':
                this.setState({ name: event.target.value })
                break;
        } 
        this.props.onStateChange({ ...this.state })
    }

    render() {
        return (
            <div>
                <h3>Company</h3>
                <ControlLabel>BS</ControlLabel>
                <FormControl
                    type="text"
                    id="bs"
                    value={this.state.bs}
                    placeholder="BS"
                    onChange={this.handleChange}
                />
                <ControlLabel>Catch Phrase</ControlLabel>
                <FormControl
                    type="text"
                    id="catchPhrase"
                    value={this.state.catchPhrase}
                    placeholder="Catch Phrase"
                    onChange={this.handleChange}
                />
                <ControlLabel>Company Name</ControlLabel>
                <FormControl
                    type="text"
                    id="name"
                    value={this.state.name}
                    placeholder="Name"
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default CompanyForm
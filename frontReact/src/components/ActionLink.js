import React, {Component} from 'react'

class ActionLink extends Component {
    
    constructor(props) {
        super(props)
    }

    handleClick = e => { 
      e.preventDefault()
      this.props.action()
    };
  
    render() {
      return (
        <a href="#" onClick={this.handleClick}>
            {this.props.children}
        </a>
      );
    }
}

export default ActionLink
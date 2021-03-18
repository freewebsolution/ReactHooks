import React, {Component} from 'react';

class Button extends Component {
    constructor() {
        super();
        this.state = {buttonText: " Click me, please"};
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(()=> {
            return {buttonText: "Thanks, been clicked!"}
        })
    }
    render() {
        const {buttonText} = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        );
    }
}

export default Button;

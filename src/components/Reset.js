import React, { Component } from 'react';

class Reset extends Component {

    onResetDefault = () => {
        this.props.onSetDefault(true);
    }

    render() {
        return (
            <button type="button"
            className="btn btn-primary"
            onClick={ this.onResetDefault }
            >reset</button>
        );
    }
}

export default Reset;

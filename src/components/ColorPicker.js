import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'colors': ['red', 'green', 'blue', '#ccc']
        };
    }

    showColor(color) {
        // console.log(this.props.color);
        return {
            backgroundColor: color
        }
    }

    setActiveColor(color) {
        this.props.onReceiveColor(color);
    }
    render() {
        var elmColors = this.state.colors.map((c, index) => {
            return <span key={index}
                         style={ this.showColor(c) }
                         className={this.props.color === c ? 'active' : '' }
                         onClick={ () =>this.setActiveColor(c) }
                         ></span>
        });
        return (
            <div className ="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className ="panel panel-primary">
                    <div className ="panel-heading">
                        <h3 className ="panel-title">ColorPicker</h3>
                    </div>
                    <div className ="panel-body">
                        { elmColors }
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;

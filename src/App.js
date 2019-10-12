import React, { Component } from 'react';
 import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: 'red',
            currentSize: 12
        };
    }

    onSetColor = (params) => {
        this.setState({
            'currentColor': params
        });
    }

    onChangeSize = (params) => {
        if (this.state.currentSize + params >= 8 && this.state.currentSize + params <= 36) {
            this.setState({
                'currentSize': this.state.currentSize + params
            })
        }
    }

    onSetDefault = (params) => {
        if (params) {
            this.setState({
                currentColor: 'red',
                currentSize: 12
            });
        }
    }

    render() {
        return (
            <div className="container-fluid" id="page">
                <div className="row">
                    <ColorPicker color={this.state.currentColor} onReceiveColor={this.onSetColor} />
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting
                            fontSize={this.state.currentSize}
                            onChangeSize={ this.onChangeSize }

                        />
                        <Reset onSetDefault={ this.onSetDefault }/>
                    </div>
                    <Result color={this.state.currentColor} fontSize={this.state.currentSize} />
                </div>
            </div>
        );
    }
}

export default App;

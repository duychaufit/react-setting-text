import React, { Component } from 'react';


class SizeSetting extends Component {
    changeSize(size) {
        this.props.onChangeSize(size);
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Fontsize {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-warning" onClick={ () => this.changeSize(-2) }>giam</button>&nbsp;
                    <button type="button" className="btn btn-info" onClick={ () => this.changeSize(2) }>tang</button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;

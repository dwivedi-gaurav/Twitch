import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

class Modal extends React.Component{
    render(){
        return (
            ReactDOM.createPortal(
            <div onClick={this.props.onDismiss} className="ui dimmer modals visible active">
                <div onClick={(e)=>e.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">{this.props.header}</div>
                    <div className="content">
                        <p>{this.props.content}</p>
                    </div>
                    <div className="actions">
                        {this.props.action}
                    </div>
                </div>
            </div>,
            document.querySelector("#modal")
            )
        )
    }
}

export default Modal;
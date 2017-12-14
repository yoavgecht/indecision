import React from 'react';
import Modal from 'react-modal';

export default class IndecisionApp extends React.Component {
    componentWillMount() {
        Modal.setAppElement('body');
    }
    render(){
        return(
            <Modal isOpen={!!this.props.selectedOption} contentLabel="Selected Option" onRequestClose={this.props.closeModal} closeTimeoutMS={200} className="modal">
                <h3 className="modal__title">Selected Option</h3>
                {this.props.selectedOption && <p className="modal__body">{this.props.selectedOption}</p>}
                <button className="button" onClick={this.props.closeModal}>Okay</button>
            </Modal>
        )
    }    
};

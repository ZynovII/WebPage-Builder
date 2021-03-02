import React from 'react';
import ReactDOM from 'react-dom';

export class Portal extends React.Component {
    el = document.createElement('div');
    rootElem = document.querySelector('.field-templates');
    componentDidMount() {
        this.rootElem.appendChild(this.el);
    }
    componentWillUnmount() {
        this.rootElem.removeChild(this.el);
    }
    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}
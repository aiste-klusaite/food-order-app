import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

interface ModalProps {
    children?: React.ReactNode;
    onClose?: () => void;
}


const Backdrop = ({onClose}: ModalProps) => {
    return <div className={classes.backdrop} onClick={onClose}/>
}

const ModalOverlay = ({children}: ModalProps) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal:React.FC<ModalProps> = ({children, onClose}) => {
    return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement as HTMLElement)}
        {ReactDOM.createPortal(<ModalOverlay>
            {children}
        </ModalOverlay>, portalElement as HTMLElement)}
    </Fragment>)
};

export default Modal;
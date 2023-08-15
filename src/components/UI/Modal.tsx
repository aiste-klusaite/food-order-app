import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

interface ModalProps {
    children: React.ReactNode;
}


const Backdrop = () => {
    return <div className={classes.backdrop} />
}

const ModalOverlay: React.FC<ModalProps> = ({children}) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal:React.FC<ModalProps> = ({children}) => {
    return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalElement as HTMLElement)}
        {ReactDOM.createPortal(<ModalOverlay>
            {children}
        </ModalOverlay>, portalElement as HTMLElement)}
    </Fragment>)
};

export default Modal;
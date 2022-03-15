import React from "react";
import Button from "../UI/button/Button";
import Card from "../UI/card/Card";
import classes from "./errorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return (
        <div
            onClick={props.onCloseErrorModal}
            className={classes.backdrop}
        ></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onCloseErrorModal}>Okay</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onCloseErrorModal={props.onCloseErrorModal} />,
                document.getElementById("backdrop-root")
            )}

            {ReactDOM.createPortal(
                <ModalOverlay
                    onCloseErrorModal={props.onCloseErrorModal}
                    title={props.title}
                    message={props.message}
                />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default ErrorModal;

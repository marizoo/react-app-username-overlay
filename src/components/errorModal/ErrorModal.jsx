import React from "react";
import Button from "../UI/button/Button";
import Card from "../UI/card/Card";
import classes from "./errorModal.module.css";

const ErrorModal = (props) => {
    return (
        <>
            <div
                onClick={props.onCloseErrorModal}
                className={classes.backdrop}
            ></div>
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
        </>
    );
};

export default ErrorModal;

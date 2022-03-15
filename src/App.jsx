import React, { useState } from "react";
import AddUser from "./components/addUsers/AddUser";
import ShowUsers from "./components/showUsers/ShowUsers";
import "./appStyle.css";
import ErrorModal from "./components/errorModal/ErrorModal";

const App = () => {
    // 01. a1. State to hold all user Data
    const [datas, setDatas] = useState([]);

    // 02. a1. State for the input data
    const [newUser, setNewUser] = useState({
        username: "",
        age: "",
    });

    // 03. a1. state to handle error
    //    then add the set error inside 01.a3.
    const [error, setError] = useState();

    // 02. a2. get input data + data binding
    const handleInput = (ev) => {
        ev.preventDefault();

        const fieldName = ev.target.getAttribute("name");
        const fieldValue = ev.target.value;

        const copyUser = { ...newUser };

        copyUser[fieldName] = fieldValue;

        setNewUser(copyUser);
    };

    // 02. a3. submission of form
    const handleSubmitForm = (ev) => {
        ev.preventDefault();

        // validation check, if empty then return
        if (
            newUser.username.trim().length === 0 ||
            newUser.age.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age.",
            });
            return;
        }

        // validation check, if age is less than 1 then return
        //  The plus is a force conversion of a number. bcoz the entered age is a "string"
        if (+newUser.age < 1 || +newUser.age > 101) {
            setError({
                title: "Invalid age",
                message: "Valid age is from 1 - 100",
            });
            return;
        }

        const newData = {
            username: newUser.username,
            age: newUser.age,
        };

        const newDatas = [...datas, newData];

        setDatas(newDatas);
        setNewUser({
            username: "",
            age: "",
        });
    };

    // 03. a2. state to close error modal
    // null is treated as a faulty value, so it wont be rendered
    const closeErrorModal = () => {
        setError(null);
    };

    return (
        <div className="app">
            {error && (
                <ErrorModal
                    onCloseErrorModal={closeErrorModal}
                    title={error.title}
                    message={error.message}
                />
            )}
            <div className="app-container">
                <AddUser
                    onHandleSubmitForm={handleSubmitForm}
                    onHandleInput={handleInput}
                    addUser-form-button
                    newUser={newUser}
                />

                <ShowUsers datas={datas} />
            </div>
        </div>
    );
};

export default App;

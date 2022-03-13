import React, { useState } from "react";
import AddUser from "./components/addUsers/AddUser";
import ShowUsers from "./components/showUsers/ShowUsers";
import "./appStyle.css";

const App = () => {
    // 01. a1. State to hold all user Data
    const [datas, setDatas] = useState([]);

    // 02. a1. State for the input data
    const [newUser, setNewUser] = useState({
        username: "",
        age: "",
    });

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

    return (
        <div className="app">
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

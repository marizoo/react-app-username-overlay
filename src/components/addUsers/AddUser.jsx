import React from "react";
import Button from "../UI/button/Button";
import "./addUserStyle.css";

const AddUser = ({ onHandleSubmitForm, onHandleInput, newUser }) => {
    return (
        <form className="addUser-form" onSubmit={onHandleSubmitForm}>
            <label className="addUser-form-label" htmlFor="username">
                Username
            </label>
            <input
                type="text"
                id="username"
                name="username"
                className="addUser-form-input"
                placeholder="Jane Doe.."
                value={newUser.username}
                onChange={onHandleInput}
            />
            <label className="addUser-form-label" htmlFor="age">
                Age (Years)
            </label>
            <input
                type="number"
                id="age"
                name="age"
                className="addUser-form-input"
                placeholder="21.."
                value={newUser.age}
                onChange={onHandleInput}
            />
            <Button type="submit">Add User</Button>
        </form>
    );
};

export default AddUser;

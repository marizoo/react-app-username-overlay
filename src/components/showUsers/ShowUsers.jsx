import React from "react";
import "./showUserStyle.css";
import Card from "../UI/card/Card";

const ShowUsers = ({ datas }) => {
    return (
        <div className="showUsers">
            <h2 className="showUsers-title">Users</h2>
            <Card>
                {datas.map((data) => (
                    <div className="showUsers__data" key={data.username}>
                        <p className="showUsers__data-name">
                            Name: {data.username}
                        </p>
                        <p className="showUsers__data-age">Age: {data.age}</p>
                    </div>
                ))}
            </Card>
        </div>
    );
};

export default ShowUsers;

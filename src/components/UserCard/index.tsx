import "./index.css";
import userAvatar from  "../../assets/Avatar.svg";
import React from "react";
const UserCard = (props) => {
    return (
        <div className="userCard">
            <img src={userAvatar} />
            <div className="userTexts">
                <h2>{props.name}</h2>
                <h3>{props.role}</h3>
            </div>
        </div>
    );
};

export default UserCard;
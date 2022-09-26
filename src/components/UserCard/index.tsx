import "./index.css";
import userAvatar from  "../../assets/Avatar.svg";
import React from "react";
const UserCard = ({avatar, name, role}: UserCardProps) => {
    return (
        <div className="userCard">
            <img src={avatar || userAvatar} />
            <div className="userTexts">
                <h2>{name}</h2>
                <h3>{role}</h3>
            </div>
        </div>
    );
};

interface UserCardProps {
    avatar?: string;
    name: string;
    role: string;
}

export default UserCard;
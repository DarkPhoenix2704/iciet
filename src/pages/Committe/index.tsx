import React from "react";
import "./index.css";
import committe from "../../data/committe";
import UserCard from "../../components/UserCard";
const Committe = () => {
    return (
        <div className="committe">
            <h1>Committe</h1>
            <hr/>
            {
                committe.map(val => {
                    return (
                        <>
                            <h2>{val.role}</h2>
                            <div className="usersContainer">
                                {
                                    val.members.map(member => <UserCard name={member.name} role={member.role} />)
                                }
                            </div>
                        </>
                    );
                })
            }
        </div>
    );
}
export default Committe;
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
                committe.map((val, key) => {
                    return (
                        <div key={key}>
                            <h2>{val.role}</h2>
                            <div className="usersContainer">
                                {
                                    val.members.map((member, index) => <UserCard key={index} name={member.name} role={member.role} />)
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default Committe;
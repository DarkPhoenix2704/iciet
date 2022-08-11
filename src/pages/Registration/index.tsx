import React from "react";
import "./index.css";

const Registraton = () => {
    return (
        <div className="registration">
            <h1>Registration</h1>
            <h2>Registration will start soon. Stay Tuned </h2>
            <table border={1}>
                <thead>

                <tr>
                    <th colSpan={5}>REGISTRATION FEES</th>
                </tr>
                <tr>
                    <th rowSpan={2}>Categories</th>
                    <th colSpan={2}>Delegates From India</th>
                    <th colSpan={2}>Foreign Delegates</th>
                </tr>
                <tr>
                    <th>IEEE Member</th>
                    <th>Non-IEEE Member</th>
                    <th>IEEE Member</th>
                    <th>Non-IEEE Member</th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td>UG/PG Students</td>
                    <td>INR 5000/-</td>
                    <td>INR 6000/-</td>
                    <td>USD 200/-</td>
                    <td>USD 250/-</td>
                </tr>
                <tr>
                    <td>Faculty/Research Scholar</td>
                    <td>INR 6000/-</td>
                    <td>INR 7000/-</td>
                    <td>USD 250/-</td>
                    <td>USD 300/-</td>
                </tr>
                <tr>
                    <td>Industry/Corporate</td>
                    <td>INR 7500/-</td>
                    <td>INR 8500/-</td>
                    <td>USD 300/-</td>
                    <td>USD 350/-</td>
                </tr>
                <tr>
                    <td>Co-Author/Attendee</td>
                    <td>INR 2000/-</td>
                    <td>INR 3000/-</td>
                    <td>USD 100/-</td>
                    <td>USD 100/-</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Registraton;
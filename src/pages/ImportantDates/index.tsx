import React from "react";
import DateBlock from "../../components/DateBlock";
import dates from "../../data/dates"
import "./index.css";

const ImportantDates = () => {
    return (
        <div className="dateContainer">
            <div className="dates">
                <h1>Important Dates</h1>
                <h2></h2>
                <hr/>
                <div className="dateContent">
                    {
                        dates.map((val,key) => <DateBlock key={key} date={val.date} month={val.month} content={val.content}/>)
                    }
                </div>
            </div>
        </div>
    );
}
export default ImportantDates;
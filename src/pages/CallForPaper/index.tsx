import React from "react";
import "./index.css";
import cfp from "../../assets/cfp.png";
import cfpDownload from "../../assets/cfp.pdf";
const CallForPaper = () => {
    return (
        <div className="callForPaper">
            <img src={cfp}/>
            <div className="buttons">
                <a href={cfpDownload} target="_blank download">
                    <button>
                        Download CFP
                    </button>
                </a>

            </div>
        </div>
    );
}
export default CallForPaper;
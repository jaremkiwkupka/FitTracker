import React from "react";
import "../Form.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFemale, faMale} from "@fortawesome/free-solid-svg-icons";

export const SexIcons = ({female, male, getFemale, getMale}) => {
    const femaleFA = <FontAwesomeIcon icon={faFemale} />;
    const maleFA = <FontAwesomeIcon icon={faMale} />;

    return (
        <div className="form-fields-icons">
            <label className="form-fields--singleIcon sex-icon" id="female-icon">
                {femaleFA}
                <input type="radio" name="sexIcon" value={female} onClick={getFemale}/>
            </label>
            <label className="form-fields--singleIcon sex-icon" id="male-icon">
                {maleFA}
                <input type="radio" name="sexIcon" value={male} onClick={getMale}/>
            </label>
        </div>
    )
}
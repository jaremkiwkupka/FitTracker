import React from "react";
import "../Form.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFemale, faMale} from "@fortawesome/free-solid-svg-icons";


export const GenderIcons = ({female, male, getFemale, getMale}) => {
    const femaleFA = <FontAwesomeIcon icon={faFemale} />;
    const maleFA = <FontAwesomeIcon icon={faMale} />;

    return (
        <div className="form-fields-icons">
            <label className="form-fields--singleIcon gender-icon" id="female-icon">
                {femaleFA}
                <input type="radio" name="genderIcon" value={female} onClick={getFemale}/>
            </label>
            <label className="form-fields--singleIcon gender-icon" id="male-icon">
                {maleFA}
                <input type="radio" name="genderIcon" value={male} onClick={getMale}/>
            </label>
        </div>
    )
}
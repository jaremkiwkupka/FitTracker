import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFemale, faMale} from "@fortawesome/free-solid-svg-icons";

export const SexIcons = ({female, male}) => {
    const femaleIcon = <FontAwesomeIcon icon={faFemale} />;
    const maleIcon = <FontAwesomeIcon icon={faMale} />;

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setIsChecked(prevstate => {
            return {
                ...prevstate,
                [name]: value
            }
        });
    };

    return (
        <div className="form-fields-icons">
            <label className="form-fields--singleIcon sex-icon" id="female-icon">
                {femaleIcon}
                <input type="radio" name="sexIcon" value={female} onClick={handleChange}/>
            </label>
            <label className="form-fields--singleIcon sex-icon" id="male-icon">
                {maleIcon}
                <input type="radio" name="sexIcon" value={male} onClick={handleChange}/>
            </label>
        </div>
    )
}
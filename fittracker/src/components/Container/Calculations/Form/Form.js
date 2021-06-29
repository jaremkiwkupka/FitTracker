import React, {useState} from "react";
import "../Form/Form.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFemale, faMale} from "@fortawesome/free-solid-svg-icons";

export const Form = () => {
    const [form, setForm] = useState({age: "", height: "", weight: "", activity: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevstate => {
            return {
                ...prevstate,
                [name]: value
            }
        });
    };

    const female = <FontAwesomeIcon icon={faFemale} />;
    const male = <FontAwesomeIcon icon={faMale} />;

    return (
        <div className="form-container">
            <h2 className="heading">Determine your total daily calorie needs</h2>
            <p className="paragraph">fill in the form fields</p>
            <form className="form-fields">
                <div className="form-fields-toFill">
                    <div className="form-fields--item">
                        <label className="form-fields--label">Age</label>
                        <input className="form-fields--input" type="text" name="age" value={form.age} onChange={handleChange}/>
                    </div>
                    <div className="form-fields--item">
                        <label className="form-fields--label">Height</label>
                        <input className="form-fields--input" type="text" name="height" value={form.height} onChange={handleChange}/>
                    </div>
                    <div className="form-fields--item">
                        <label className="form-fields--label">Weight</label>
                        <input className="form-fields--input" type="text" name="weight" value={form.weight} onChange={handleChange}/>
                    </div>
                    <div className="form-fields--item">
                        <label className="form-fields--label">Your activity</label>
                        <select className="form-fields--select" value={form.activity} onChange={handleChange}>
                            <option value="bieg">Bieg</option>
                            <option value="spacer">Spacer</option>
                            <option value="pływanie">Pływanie</option>
                            <option value="jazda na rowerze">Jazda na rowerze</option>
                        </select>
                    </div>
                </div>
                <div className="form-fields-icons">
                    <div className="form-fields--singleIcon">{female}</div>
                    <div className="form-fields--singleIcon">{male}</div>
                </div>
                <input className="calculate-btn" type="submit" value="Calculate" />
            </form>
        </div>
    )
}
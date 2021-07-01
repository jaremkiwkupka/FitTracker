import React, {useState} from "react";
import "../Form/Form.scss";
import {Scores} from "../Scores/Scores";
import {CaloricContentOfDiet} from "../CaloricContentOfDiet/CaloricContentOfDiet";
import {SaveCalculations} from "../SaveCalculations/SaveCalculations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFemale, faMale} from "@fortawesome/free-solid-svg-icons";

export const Form = () => {
    const female = <FontAwesomeIcon icon={faFemale} />;
    const male = <FontAwesomeIcon icon={faMale} />;

    const [form, setForm] = useState({age:"", height: "", weight: "", activity:"", sexIcon: ""});
    const [bmi, setBmi] = useState();
    // const [femaleChecked, setFemaleChecked] = useState(false);
    // const [maleChecked, setMaleChecked] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevstate => {
            return {
                ...prevstate,
                [name]: value
            }
        });
    };

    const calculateBMI = (e) => {
        e.preventDefault();
        setBmi((form.weight / Math.pow(form.height, 2)).toFixed(2));
    }
    //
    // const handleFemaleClassChange = () => {
    //     const femaleIcon = document.getElementById("female-icon");
    //     femaleIcon.classList.toggle("active");
    //     // setFemaleChecked(true);
    // }
    //
    // const handleMaleClassChange = () => {
    //     const maleIcon = document.getElementById("male-icon");
    //     maleIcon.classList.toggle("active");
    //     // setMaleChecked(true);
    // }

        return (
            <>
                <div className="form-container">
                    <h2 className="heading">Determine your total daily calorie needs</h2>
                    <p className="paragraph">fill in the form fields</p>
                    <form className="form-fields"  onSubmit={calculateBMI}>
                        <div className="form-fields-toFill">
                            <div className="form-fields--item">
                                <label className="form-fields--label">Age</label>
                                <input className="form-fields--input" type="number" name="age" placeholder="years" value={form.age} onChange={handleChange}/>
                            </div>
                            <div className="form-fields--item">
                                <label className="form-fields--label">Height</label>
                                <input className="form-fields--input" id="height" type="number" name="height" placeholder="meters" value={form.height} onChange={handleChange}/>
                            </div>
                            <div className="form-fields--item">
                                <label className="form-fields--label">Weight</label>
                                <input className="form-fields--input" id="weight" type="number" name="weight" placeholder="kilograms" value={form.weight} onChange={handleChange}/>
                            </div>
                            <div className="form-fields--item">
                                <label className="form-fields--label">Your activity</label>
                                <input className="form-fields--input" type="number" name="activity" placeholder="see the tooltip" value={form.activity} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="form-fields-icons">
                            <label className="form-fields--singleIcon sex-icon" id="female-icon">
                                {female}
                                <input type="radio" name="sexIcon" value={form.female} onClick={handleChange}/>
                            </label>
                            <label className="form-fields--singleIcon sex-icon" id="male-icon">
                                {male}
                                <input type="radio" name="sexIcon" value={form.male} onClick={handleChange}/>
                            </label>
                        </div>
                        <input className="calculate-btn" type="submit" value="Calculate" />
                    </form>
                </div>
                <div className="calculations-container">
                    <Scores bmiValue={bmi} />
                    <CaloricContentOfDiet />
                    <SaveCalculations />
                </div>
            </>
        )
    }
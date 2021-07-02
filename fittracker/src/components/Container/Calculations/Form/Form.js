import React, {useState} from "react";
import "../Form/Form.scss";
import {Scores} from "../Scores/Scores";
import {CaloricContentOfDiet} from "../CaloricContentOfDiet/CaloricContentOfDiet";
import {SaveCalculations} from "../SaveCalculations/SaveCalculations";
import {SexIcons} from "./SexIcons/SexIcons";

export const Form = () => {

    const [form, setForm] = useState({age:"", height: "", weight: "", activity:"", female: "", male: ""});
    const [bmi, setBmi] = useState(0);
    const [ppm, setPpm] = useState(0);
    const [cpm, setCpm] = useState(0);
    const [caloricContent, setCaloricContent] = useState(0);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevstate => {
            return {
                ...prevstate,
                [name]: value
            }
        });
    };

    const [femaleChecked, setFemaleChecked] = useState(false);
    const [maleChecked, setMaleChecked] = useState(false);

    const handleFemaleChange = () => {
        setFemaleChecked(false);
        setMaleChecked(true);
        console.log("female " + femaleChecked);
        console.log("male " + maleChecked);
    };

    const handleMaleChange = () => {
        setFemaleChecked(true);
        setMaleChecked(false);
        console.log("female " + femaleChecked);
        console.log("male " + maleChecked);
    };

    const pal = [
        {id: 1, desc: "sedentary lifestyle, no additional physical exercise", val: 1.2},
        {id: 2, desc: "a lot of exercise during the day, light workouts", val: 1.5},
        {id: 3, desc: "a lot of exercise during the day, heavy regular workouts", val: 1.8},
        {id: 4, desc: "standing work,  light workouts", val: 2.1},
        {id: 5, desc: "physical work, heavy workouts", val: 2.4}
    ];

    const calculate = (e) => {
        e.preventDefault();

        //Calculate BMI
        setBmi(((form.weight / Math.pow(form.height, 2)) * 10000).toFixed(2));

        //Calculate PPM
        if(femaleChecked === true && maleChecked === false) {
            setPpm((66.5 + (13.75 * form.weight) + (5.003 * form.height) - (6.775 * form.age)).toFixed(0));
        } else {
            setPpm((655.1 + (9.563 * form.weight) + (1.85 * form.height) - (4.676 * form.age)).toFixed(0));
        }

        //Calculate CPM
        const activityLevel = document.getElementById("activity-levels").value;
        setCpm((activityLevel * ppm).toFixed(0));

        //Calculate Caloric Content of Diet
        setCaloricContent((cpm * 0.8).toFixed(0));
    }

        return (
            <>
                <div className="form-container">
                    <h2 className="heading">Determine your total daily calorie needs</h2>
                    <p className="paragraph">fill in the form fields</p>
                    <form className="form-fields">
                        <div className="form-fields-toFill">
                            <div className="form-fields--item">
                                <label className="form-fields--label">Age</label>
                                <input className="form-fields--input" type="number" name="age" placeholder="years" value={form.age} onChange={handleChange}/>
                            </div>
                            <div className="form-fields--item">
                                <label className="form-fields--label">Height</label>
                                <input className="form-fields--input" id="height" type="number" name="height" placeholder="centimeters" value={form.height} onChange={handleChange}/>
                            </div>
                            <div className="form-fields--item">
                                <label className="form-fields--label">Weight</label>
                                <input className="form-fields--input" id="weight" type="number" name="weight" placeholder="kilograms" value={form.weight} onChange={handleChange}/>
                            </div>
                            <div className="form-fields--item">
                                <label className="form-fields--label">Your activity</label>
                                <select className="form-fields--select" id="activity-levels">
                                    value={form.activity}
                                    onChange={handleChange}
                                    {pal.map((el, id) => <option value={el.val} key={el.id}>{el.desc}</option>)}
                                </select>
                            </div>
                        </div>
                        <SexIcons female={form.female} male={form.male} getFemale={handleFemaleChange} getMale={handleMaleChange}/>
                        <input className="calculate-btn" type="submit" value="Calculate" onClick={calculate}/>
                    </form>
                </div>
                <div className="calculations-container">
                    <Scores bmiValue={bmi} ppmValue={ppm} cpmValue={cpm}/>
                    <CaloricContentOfDiet caloricContent={caloricContent}/>
                    <SaveCalculations />
                </div>
            </>
        )
    }
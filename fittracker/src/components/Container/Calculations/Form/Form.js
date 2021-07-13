import React, {useState} from "react";
import "../Form/Form.scss";
import {Scores} from "../Scores/Scores";
import {CaloricContentOfDiet} from "../CaloricContentOfDiet/CaloricContentOfDiet";
import {SaveCalculations} from "../SaveCalculations/SaveCalculations";
import {GenderIcons} from "./GenderIcons/GenderIcons";

export const Form = () => {

    const [form, setForm] = useState({age:"", height: "", weight: "", activity:"", female: "", male: ""});
    const [userScores, setUserScores] = useState({bmi:0, ppm:0, cpm:0, caloricContent:0});

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
    };

    const handleMaleChange = () => {
        setFemaleChecked(true);
        setMaleChecked(false);
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

        const activityLevel = document.getElementById("activity-levels").value;
        const forFemale = () => {
            return userScores.ppm = ((66.5 + (13.75 * form.weight) + (5.003 * form.height) - (6.775 * form.age)).toFixed(0));
        }
        const forMale = () => {
            return userScores.ppm = ((655.1 + (9.563 * form.weight) + (1.85 * form.height) - (4.676 * form.age)).toFixed(0));
        }
        let bmi = ((form.weight / Math.pow(form.height, 2)) * 10000).toFixed(2);
        let ppm = femaleChecked === true && maleChecked === false ? forFemale() : forMale();
        let cpm = ((activityLevel * userScores.ppm).toFixed(0));

        setUserScores(userScores => {
            return {
                ...userScores,
                bmi: bmi,
                ppm: ppm,
                cpm: cpm,
                caloricContent: ((cpm * 0.8).toFixed(0))
            }
        }, () => {
            console.log(userScores);
        });
    }

    const userCalorieNeeds = {
        bmi: userScores.bmi,
        ppm: userScores.ppm,
        cpm: userScores.cpm,
        caloricContent: userScores.caloricContent
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
                        <GenderIcons getFemale={handleFemaleChange} getMale={handleMaleChange}/>
                        <input className="calculate-btn" type="submit" value="Calculate" onClick={calculate}/>
                    </form>
                </div>
                <div className="calculations-container">
                    <Scores bmiValue={userScores.bmi} ppmValue={userScores.ppm} cpmValue={userScores.cpm}/>
                    <CaloricContentOfDiet caloricContent={userScores.caloricContent}/>
                    <SaveCalculations userCalorieNeeds={userCalorieNeeds} />
                </div>
            </>
        )
    }
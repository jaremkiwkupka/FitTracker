import React, {useState, useEffect} from "react";
import {Menu} from "../Container/Menu/Menu";
import "../../styles/_layout.scss";
import "../Diary/Diary.scss";
import {Date} from "./Date/Date";
import {Meals} from "./Meals/Meals";
import {CaloricBalance} from "./CaloricBalance/CaloricBalance";

export const Diary = () => {

    //BREAKFAST
    const [selectedBreakfast, setSelectedBreakfast] = useState("");

    const handleBreakfastChange = (e) => {
        setSelectedBreakfast(JSON.parse(e.target.value));
    }

    //SNACK
    const [selectedSnack, setSelectedSnack] = useState("");

    const handleSnackChange = (e) => {
        setSelectedSnack(JSON.parse(e.target.value));
    }

    //DINNER
    const [selectedDinner, setSelectedDinner] = useState("");

    const handleDinnerChange = (e) => {
        setSelectedDinner(JSON.parse(e.target.value));
    }

    //SUPPER
    const [selectedSupper, setSelectedSupper] = useState("");

    const handleSupperChange = (e) => {
        setSelectedSupper(JSON.parse(e.target.value));
    }

    //SUMMARY
    const [caloriesSum, setCaloriesSum] = useState(0);
    const [proteinSum, setProteinSum] = useState(0);
    const [carboSum, setCarboSum] = useState(0);
    const [fatSum, setFatSum] = useState(0);
    const [remainingCalories, setRemainingCalories] = useState(0);
    const [caloricNeeds, setCaloricNeeds] = useState(0);

    useEffect(() => {
        fetch('http://localhost:4000/caloricNeeds', {
            method: "GET"
        }).then((res) => res.json())
            .then((caloricNeeds) => {
                setCaloricNeeds(caloricNeeds);
            })
    }, []);

    const handleCount = () => {
        setCaloriesSum(selectedBreakfast.calories + selectedSnack.calories + selectedDinner.calories + selectedSupper.calories);
        setProteinSum(selectedBreakfast.protein + selectedSnack.protein + selectedDinner.protein + selectedSupper.protein);
        setCarboSum(selectedBreakfast.carbo + selectedSnack.carbo + selectedDinner.carbo + selectedSupper.carbo);
        setFatSum(selectedBreakfast.fat + selectedSnack.fat + selectedDinner.fat + selectedSupper.fat);
        setRemainingCalories(caloricNeeds.caloricContent - caloriesSum);
    }


    return (
        <div className="container">
            <Menu />
            <div className="diary-container">
                <section className="diary-container--heading">
                    <div>
                        <h2 className="heading diary-heading">Your Diary</h2>
                        <p className="paragraph">select date and choose your meals</p>
                    </div>
                    <Date />
                </section>
                <CaloricBalance
                    caloriesSum={caloriesSum}
                    proteinSum={proteinSum}
                    carboSum={carboSum}
                    fatSum={fatSum}
                    remainingCalories={remainingCalories}
                />
                <Meals
                    handleBreakfastChange={handleBreakfastChange}
                    selectedBreakfast={selectedBreakfast}
                    handleSnackChange={handleSnackChange}
                    selectedSnack={selectedSnack}
                    handleDinnerChange={handleDinnerChange}
                    selectedDinner={selectedDinner}
                    handleSupperChange={handleSupperChange}
                    selectedSupper={selectedSupper}
                    calorieSum={caloriesSum}
                    handleCount={handleCount}
                />
            </div>
        </div>
    );
}
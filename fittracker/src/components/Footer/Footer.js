import React from "react";
import "./Footer.scss";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import pinterest from "../../assets/pinterest.png";

export const Footer = () => {


    return (
        <footer>
            <div className="footer-about">
                <h3 className="footer-about--title">Fit tracker - portfolio project</h3>
                <p className="footer-about--text">FitTracker is a web app which allows you to count your calorie needs and track your daily calorie intake.</p>
                <p className="footer-about--text">Project is build in <strong>React</strong>. I also used <strong>React Router </strong>
                    to connect the sites and <strong>JSON Server</strong> to make a data base. </p>
            </div>
            <div className="footer-socials">
                <img className="footer-socials--icons" src={facebook} />
                <img className="footer-socials--icons" src={instagram} />
                <img className="footer-socials--icons" src={twitter} />
                <img className="footer-socials--icons" src={pinterest} />
            </div>
        </footer>
    )
}
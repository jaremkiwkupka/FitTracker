import React from "react";
import "./Author.scss";
import {Menu} from "../Container/Menu/Menu";
import author from "../../assets/project_author.jpg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

export const Author = () => {
    return (
        <div className="container">
            <Menu />
            <section className="author-container">
                <div className="author-heading">
                    <h3 className="heading">About Author</h3>
                </div>
                <div className="author-data">
                    <div className="author-personals">
                        <img className="author-photo" alt="author" src={author}/>
                        <div className="author-contact">
                            <h4 className="author-contact-heading">Contact details</h4>
                            <ul className="author-contact-list">
                                <li>phone: +48 538 207 437</li>
                                <li>email: julka.jaremkiw[at]gmail.com</li>
                                <li>city: Katowice, Poland</li>
                                <li>socials:</li>
                            </ul>
                            <a href="https://github.com/julajot" target="_blank" rel="noreferrer"><img className="author-contact-social" alt="github" src={github}/></a>
                            <a href="https://www.linkedin.com/in/julia-jaremkiw-393084131/" target="_blank" rel="noreferrer"><img className="author-contact-social" alt="linkedin" src={linkedin}/></a>
                        </div>
                    </div>
                    <div className="author-about">
                        <p className="author-about--text">
                            Hi, my name is Julia Jaremkiw-Kupka and I'm Junior React Developer.
                        </p>
                        <p className="author-about--text">
                            I used to work as marketing manager. I've been responsible for many marketing endeavors,
                            including creating and implementing a responsive website of the company. I was interested in
                            frontend-development for many years and after this experience I felt like this is what
                            I really love to do.
                        </p>
                        <p className="author-about--text">
                            In July this year, I completed a programming course in CodersLab institution.
                            I've expanded my knowledge in HTML & CSS and learned languages such as SCSS, JS and React.
                        </p>
                        <p className="author-about--text">
                            This website is my final project. I wrote it using React.
                            In this project I also used such technologies as React Router and JSON Server.
                        </p>
                        <p className="author-about--text">
                            I like challenges and I see problems as opportunities to learn new things. I'm a team-player
                            with high level of emphaty.
                        </p>
                        <p className="author-about--text">
                            In private time I love working out, gardening, singing loud while driving a car (like nobody's watching!)
                            and playing with my children.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
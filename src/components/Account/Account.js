import React from 'react';
import './Account.css';
import img1 from '../../images/profile.png';
import img2 from '../../images/game.jpg';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Account = () => {
    return (
        <div>
            <h3 className="my-5 text-center text-success">Acount Information</h3>
            <section className="account-info my-5">
                <div >
                    <img className="account-img" src={img1} alt="" />
                </div>

                <div className="account-description">
                    <p>Name: Abdur Rahman</p>
                    <p>Email: abdurrahman98iubat@gmail.com</p>
                    <p>Age: 23</p>
                    <p>Mobile: 880198386735</p>
                    <p>Mental Stability: Normal</p>
                </div>
            </section>

            <section className="game-info my-5">
                <div >
                    <h3 className="my-5 text-center text-success">Play A Brain Game!!!</h3>
                    <Link to="/not-found"><img className="game" src={img2} alt="" /></Link>
                </div>
                <div className="progress-section">
                    <h3 className="my-5 text-center text-success">Your Progress</h3>
                    <p className=" text-center">This data is showing how many percent you've laearn from this game!</p>
                    <div>
                        <ProgressBar variant="success" className="progress" now={40} label="Mood Disorders: 40%" />
                        <ProgressBar variant="info" now={20} label="Anxiety: 20%" />
                        <ProgressBar variant="warning" now={60} label="Dementia: 60%" />
                        <ProgressBar variant="danger" now={80} label="Depression: 80%" />
                        <ProgressBar variant="success" now={40} label="Bipolar Disorders: 40%" />
                        <ProgressBar variant="info" now={30} label="Social anxiety: 30%" />
                        <ProgressBar variant="warning" now={50} label="Panic: 50%" />
                        <ProgressBar variant="danger" now={25} label="Impatient: 25%" />
                    </div>
                </div>


            </section>
        </div>
    );
}

export default Account;
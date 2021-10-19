import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Register.css';
import useAuth from "../../hooks/useAuth";

const Register = () => {

    // google SignIn part

    const { user, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/'


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }


// email and password 

    const auth = getAuth();
    const [error, setError] = useState('');
    const [data, setData] = useState({ name: '', email: '', password: '' });
    const [isLogin, setIsLogin] = useState(false);
  
    const handleData = (event) => {
        const newData = { ...data }
        newData[event.target.name] = event.target.value;
        setData(newData);

    }
    console.log(data);

    // register new account 

    const handleRegistration = e => {
        e.preventDefault();

        if (data.password.length < 6) {
            setError('Password must be in 6 character!!!');
            return;
        }

        if (!/(?=.*[A-Z].*[A-Z])/.test(data.password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        if (isLogin) {
            processLogin(data.email, data.password);
        }
        else {
            createNewUser(data.email, data.password);
        }

    }

    const handleLogin = (event) => {
        event.preventDefault();
        processLogin(data.email, data.password);
        history.push(redirect_url)

    }

  // login account 

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })

            .catch(error => {
                setError(error.message);
            })
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
                
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: data.name })
            .then(result => { })
    }

    // login and registration page 

    const handleSignInButton = () => {
        document.getElementById('register-div').style.display = 'none';
        document.getElementById('login-div').style.display = 'block';
    }
    const handleRegisterButton = () => {
        document.getElementById('login-div').style.display = 'none';
        document.getElementById('register-div').style.display = 'block';
    }

    return (
        <div className="login-container">
            <div id="register-div">
                <h4 className="text-center">Register Here</h4>

                <div className="row mb-3 text-danger">{ }</div>

                <Form onSubmit={handleRegistration}>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleData} required type="text" name="name" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onBlur={handleData} required type="email" name="email" placeholder="Enter Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleData} required type="password" name="password" placeholder="Enter Your Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Click to submit</Form.Label>
                        <Form.Control type="submit" value="Submit" />
                    </Form.Group>
                </Form>
                <h5 className="text-center mt-3">Already have an account? <Button className="login-btn" onClick={handleSignInButton} to="">SignIn</Button></h5>
            </div>


            <div id="login-div">
                <h4 className="text-center">Login Here</h4>

                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onBlur={handleData} required type="email" name="email" placeholder="Enter Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleData} required type="password" name="password" placeholder="Enter Your Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Click to submit</Form.Label>
                        <Form.Control type="submit" value="Submit" />
                    </Form.Group>
                </Form>
                <h5 className="text-center mt-3">New User? <Button className="login-btn" onClick={handleRegisterButton}>Register</Button></h5>
            </div>

            <div className="other-options" >
                <h5>Other Sign Up Option</h5>
                <Button onClick={handleGoogleLogin} className="google">Google Sign Up</Button>
            </div>
        </div>
    );
}

export default Register;
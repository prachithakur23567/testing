import React, { useContext } from 'react'
import { UserContext } from "./UserContext";
import HttpsIcon from '@mui/icons-material/Https';
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import { UserContext } from "./UserContext";
import "./style.css"

import HomeIcon from '@mui/icons-material/Home';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TaskIcon from '@mui/icons-material/Task';
import ReportIcon from '@mui/icons-material/Report';

import logo from "./image/lockk.webp";

// import SignUp from "./SignUp";
import SignIn from "./SignIn";

import "./style.css"

const SignUp = () => {
    // const msg = useContext(UserContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])
    // const [pages, setPages] = useState("SignIn")


    const onSubmits = (event) => {
        event.preventDefault();
        // alert("your form is successfully submitted");
        const newEntry = { name: name, email: email, password: password };
        // setAction(action);
        setAllEntry([...allEntry, newEntry])
        console.log(allEntry);
    }
    return (
        <div className="App">

            <div className="header">
                <div className="part-1">
                    <div className="left">
                        <div className="word">
                            <h1 style={{
                                marginLeft: "24px", fontSize: "40px", fontWeight: "700", marginBottom: "0px"
                            }}>
                                SUPPORT CENTER
                            </h1>
                            <p style={{
                                marginLeft: "10rem", fontSize: "20px", fontWeight: "400", marginTop: "2px",
                            }}>Support Ticket System </p>
                        </div>
                    </div>
                    <div className="right" style={{ marginRight: "24px", marginTop: "10px" }}>
                        <li>
                            <span style={{ borderRight: "2px solid black", margin: "7px", fontSize: "18px", paddingRight: "10px", fontWeight: "400" }}>
                                Guest User
                            </span>
                        </li>
                        <NavLink to="/" style={{ textDecoration: "none" }} >
                            <li>
                                <span style={{ margin: "7px", fontSize: "18px", fontWeight: "400", color: "rgb(0, 113, 188)" }}>Sign In</span>

                            </li>

                        </NavLink>
                    </div>
                </div>
                <div className="part-2">
                    <div className="fonts">
                        <div className="first"  >
                            <NavLink to="/" style={{ textDecoration: "none" }}>
                                <li style={{ color: "black", textDecoration: "none", listStyle: "none", width: "13rem" }}>
                                    <HomeIcon /> Support Center Home
                                </li></NavLink>
                        </div>
                        <div className="first">
                            <NavLink to="/open" style={{ textDecoration: "none", color: 'black' }}>
                                <li>
                                    <UploadFileIcon /> Open a New Ticket
                                </li>
                            </NavLink>

                        </div>
                        <div className="first">
                            <NavLink to="/check" style={{ textDecoration: "none", color: 'black' }}>
                                <li>
                                    <TaskIcon /> Check Ticket Status
                                </li>
                            </NavLink>

                        </div>
                    </div>



                </div>
            </div>
            {/* <hr /> */}

            <div className="mainn">
                <div className="paras">
                    <p style={{
                        display: "flex", border: "3px solid rgb(185, 118, 118) ", backgroundColor: "rgb(240, 192, 192)", margin: "8px 15px", fontSize: "18px",
                        fontWeight: "500",
                        width: "70rem"
                    }}>
                        <li style={{ margin: "4px 10px", color: "red", alignItems: "center", }}>
                            <ReportIcon />
                        </li>
                        <li style={{ alignItems: "center", margin: "4px 5px", }}>Access denied</li>
                    </p>
                    <h2 style={{
                        margin: "4px 15px", fontSize: "28px", fontWeight: "500", color: "rgb(91, 181, 240)"
                    }}>Sign in to prakashhelpdesk</h2>
                    <p style={{
                        margin: "4px 15px", fontSize: "18px", fontWeight: "500",
                        color: "black"
                    }}>To better serve you, we encourage our clients to register for an account.</p>
                </div>

                <div className="form">
                    <form
                        onSubmit={onSubmits}
                    >
                        <div className="formin">
                            <div className="formleft">
                                <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} name="name" value={name} required

                                />
                                <input type="email" placeholder='email' name="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                                <input type="password" placeholder='Password' name="password" onChange={(e) => setPassword(e.target.value)} value={password} required />

                                <button onClick={onSubmits}>Sign Up</button>


                            </div>



                        </div>


                    </form>
                </div>



                <div className="line" style={{
                    margin: "5px 15px", fontSize: "18px", fontWeight: "500", color: 'black'
                }}>
                    <p>If this is your first time contacting us or you;ve lost the ticket number, please <span style={{ color: "rgb(10, 104, 167)" }}> open a new ticket</span></p>
                </div>
            </div>

        </div>


    )
}

export default SignUp;

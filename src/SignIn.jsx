import React, { useContext } from 'react'
import { UserContext } from "./UserContext";
import HttpsIcon from '@mui/icons-material/Https';
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import { UserContext } from "./UserContext";

import "./style.css"


const SignIn = () => {
    // const msg = useContext(UserContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])


    const onSubmits = (event) => {
        event.preventDefault();
        // alert("your form is successfully submitted");
        const newEntry = { name: name, email: email, password: password };
        // setAction(action);
        setAllEntry([...allEntry, newEntry])
        console.log(allEntry);
    }

    // const SignIn = () => {
    return (
        <div className="form">
            <form
                onSubmit={onSubmits}
            >
                <div className="formin">
                    <div className="formleft">
                        <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} name="name" value={name} />
                        <input type="password" placeholder='Password' name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <button onClick={onSubmits}>Sign In</button>

                        <span style={{
                            fontSize: "18px", color: "rgb(10, 104, 167)", fontWeight: "500", margin: "2px 7px"
                        }}>Forget my password</span>

                    </div>
                    <div className="formright" style={{ margin: "10px 60px" }}>
                        <p>
                            <NavLink to="/signUp" style={{ textDecoration: "none" }} >
                                <p style={{ color: "black", fontSize: "18px", fontWeight: "500" }}>Not yet Registered ? <span style={{
                                    color: "rgb(10, 104, 167)", width: "14rem"
                                    , fontWeight: "500", margin: "1px 4px", fontSize: "18px"
                                }} > Create an account</span></p>
                            </NavLink>

                            <NavLink to="/" style={{ textDecoration: 'none' }}>
                                <p style={{ color: "black", fontSize: "18px", fontWeight: "700" }} >I'm an agent -- <span style={{ color: "rgb(10, 104, 167)", fontWeight: "500", margin: "1px 4px", fontSize: "18px" }}>Sign in here</span></p>

                            </NavLink>
                        </p>

                    </div>


                    <div className="image" style={{
                        alignItems: "center", justifyContent: "center", margin: "3px 5px 3px 80px"
                    }}

                    > <HttpsIcon style={

                        {
                            height: "7rem", width: "7rem", color: "yellow", marginTop: "2.5rem", marginRight: "3rem"
                        }
                    } />
                    </div>
                </div>


            </form>
        </div>
    )
}

export default SignIn

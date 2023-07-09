import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useDispatch, useSelector} from "react-redux";
import { setInputName } from "../Store/Store";
import { setInputEmail } from "../Store/Store";
import { setInputPassword } from "../Store/Store";
import "../Register/Register.css";

const Register = () =>{
    const dispatch = useDispatch();
    const inputtext = useSelector((state)=>state.inputname);
    const inputemailvalue = useSelector((state)=>state.inputemail);
    const inputpasswordvalue = useSelector((state)=>state.inputpassword);
    const [inputNameData, setInputNameData] = useState("");
    const [inputNameError, setInputNameError] = useState("");
    const [inputEmailData, setInputEmailData] = useState("");
    const [inputEmailError, setInputEmailError] = useState("");
    const [inputPasswordData, setInputPasswordData] = useState("");
    const [inputPasswordError, setInputPasswordError] = useState("");
    const [submitMessage, setSubmitMessage] = useState("");

    const handleSubmit = () =>{
        dispatch(setInputName(inputNameData));
        dispatch(setInputEmail(inputEmailData));
        dispatch(setInputPassword(inputPasswordData));
        setInputNameData("");
        setInputEmailData("");
        setInputPasswordData("");
        if(inputNameData === ""){
            setInputNameError("Please Enter the Name");
        }
        if(inputEmailData === ""){
            setInputEmailError("Please Enter the Email");
        }
        if(inputPasswordData === ""){
            setInputPasswordError("Please Enter the Password");
        }
        if(inputNameData !== "" && inputEmailData !== "" && inputPasswordData !== ""){
            setSubmitMessage("Your message is submitted");
        }
    }

    const handleNameChange = (e) =>{
        setInputNameData(e.target.value);
        setInputNameError("")
    }
    
    const handleEmailChange = (e) =>{
        setInputEmailData(e.target.value);
        setInputEmailError("");
    }

    const handlePasswordChange = (e) =>{
        setInputPasswordData(e.target.value);
        setInputPasswordError("");
    }

    return(
        <>
            <div className="container">
                <h1 className="text-center mb-5">Redux Registration Form</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <form className="form-content">
                            <input type="text" className={inputNameError ? "error" : "form-input"} value={inputNameData} onChange={handleNameChange} placeholder="Enter Your Name" />
                            <p className={inputNameError ? "error-text" : ""}>{inputNameError}</p>
                            <input type="email" className={inputEmailError ? "error" : "form-input"} value={inputEmailData} onChange={handleEmailChange} placeholder="Enter Your Email" />
                            <p className={inputNameError ? "error-text" : ""}>{inputEmailError}</p>
                            <input type="password" className={inputPasswordError ? "error" : "form-input"} value={inputPasswordData} onChange={handlePasswordChange} placeholder="Enter Your Password" />
                            <p className={inputNameError ? "error-text" : ""}>{inputPasswordError}</p>
                            <button type="button" onClick={handleSubmit}>Submit</button>
                            {inputtext &&<p className="user-data user-name">Welcome, {inputtext}</p>}
                            {inputemailvalue &&<p className="user-data">Your email id is: {inputemailvalue}</p>}
                            {inputpasswordvalue &&<p className="user-data">Your password is: {inputpasswordvalue}</p>}
                            {submitMessage &&<p className="success-message">{submitMessage}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [inputText, setInput] = useState("")
    const [passcode, setPasscode] = useState("")
    const [alertText, setAlert] = useState("")
    const [signUp, setSignUp] = useState(false)

    let navigate = useNavigate();
    const navToHome=(e)=> {
        e.preventDefault()
        const names=[{passcode:"abc"}]
        localStorage.setItem("names", JSON.stringify(names));
        const localInfo = JSON.parse(localStorage.getItem("user"));
        if(inputText && passcode) {
            navigate("/")
        }
        else setAlert("Please enter valid credentials")
    }

const handleChange=(e)=> {
    setInput(e.target.value)
}

const handlePasscode=(e)=> {
    setPasscode(e.target.value)
}

const handleSignUp=e=> {
    setSignUp(!signUp)
}
 
    return (
        <div style={{width:"20%", margin:"30px auto"}} className="d-flex">
            <form onClick={navToHome} >
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} value={inputText} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handlePasscode} value={passcode} />
                </div>

                {signUp && 
                <div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" className="form-control" placeholder="first name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="text" className="form-control" placeholder="last name"/>
                    </div>
                </div>}

                <button type="submit" className="btn btn-primary me-5">Sign In</button>
                <button className="btn btn-secondary" onClick={handleSignUp}>Sign Up</button>
                <p style={{color:"red"}}>{alertText}</p>
            </form>
        </div>
    )
}

export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createApiClient } from "../api/api";
import '../css/signUp.css'

export const SignUp = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const getData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const signUp = async () => {
        try{
            const user = await createApiClient().post("/user/register",
            {
                email: data.email,
                password: data.password,
                userName: data.userName
            })
            navigate("/Login");
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className="signUp-page">
            <div className="signUp-form">
                <input type="text" className="userName" placeholder="Username" name="userName"
                    onBlur={getData} />
                <input type="email" className="userPass" placeholder="Email" name="email"
                    onBlur={getData} />
                <input type="password" className="userPass" placeholder="Password" name="password"
                    onBlur={getData} />
                <button onClick={signUp} className="btn btn-login">Sign Up</button>
            </div>
        </div>
    )
}

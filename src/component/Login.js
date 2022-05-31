import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createApiClient } from "../api/api";
import "../css/login.css";
import { Context } from "../data/Contexts";
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setInfo } = useContext(Context);

    const handleLogin = async () => {
        try {
            const res = await createApiClient().post("/user/login",
                {
                    email: email,
                    password: password
                })
            setInfo({
                id: res.data.id,
                email: res.data.email,
                UserName: res.data.userName,
            })
            localStorage.setItem("Token", JSON.stringify(res.data.access_token));
            navigate("/home");
            toast.success("Đăng nhập thành công!", {
                theme: "colored"
            },)

        }
        catch (err) {
            toast.error("Đăng nhập thất bại!!!!", {
                theme: "colored"
            }, {containerId: "second"})
            console.log(err.name);
        }
    }
    const enterLogin = (e) => {
        if (e.key === "Enter") {
            handleLogin()
        }
    }
    return (
        <div className="login-page">
            <div className="form">
                <div className="login-form">
                    <input type="text" className="userName" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <input type="password" className="userPass" placeholder="Password" onChange={e => setPassword(e.target.value)} onKeyPress={enterLogin} />
                    <button className="btn btn-login" onClick={handleLogin} >Login</button>
                    <p className="message-login">Not registered? <Link to="/SignUp">Create an account</Link></p>
                </div>
            </div>
        </div>
    )
}

export { Login }
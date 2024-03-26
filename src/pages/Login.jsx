import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    // const authState=location.state && location.state.message;
    const authState = location.state?.message;
    const path=location.state?.path;
    // console.log(formData)



    function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting")
        console.log("handle submit ran")
        loginUser(formData)
            .then(data => {
                // console.log(data)
                setError(null)
                localStorage.setItem("loggedin",true  )
                navigate(path ? path : "/host", { replace:true })
            })
            .catch(err => setError(err))
            .finally(() => {
                setStatus("idle")

            })

    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })

    }
    return (
        <div className="container">
            <div className="login-container">
                {authState ? <h3>{authState}</h3> : null}
                <h3 className="main-heading">Sign in to your account</h3>
                {error?.message && <h4>{error.message}</h4>}
                <form onSubmit={handleSubmit} action="" className='login-form'>
                    <div className="input-fields">
                        <input
                            onChange={handleChange}
                            type="text"
                            className="input"
                            name="email"
                            value={formData.email}
                            placeholder='Email address' />
                        <input
                            onChange={handleChange}
                            type="password"
                            className="input"
                            name="password"
                            value={formData.password}
                            placeholder='Password' />
                    </div>
                    <button disabled={status === "submitting"} className="btn">
                        {status === "submitting" ? "Logging in" : "Log in"}
                    </button>
                </form>

            </div>

        </div>
    )
}

export default Login
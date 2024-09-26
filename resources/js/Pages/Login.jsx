import React from "react";
import "../../css/Login.css";
import { useForm } from "@inertiajs/react";
import Layout from "../Layouts/Layout";

function Login() {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <form onSubmit={handleSubmit} className="login">
            <h1>Login</h1>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                />
                {errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                />
                {errors.password && <div>{errors.password}</div>}
            </div>
            <button type="submit" className="submit-btn">Login</button>
        </form>
    );
}
Login.layout = (page) => <Layout>{page}</Layout>;
export default Login;

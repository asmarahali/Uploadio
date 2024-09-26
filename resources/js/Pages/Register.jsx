import React from "react";
import "../../css/Register.css";
import { useForm } from "@inertiajs/react";
import Layout from "../Layouts/Layout";

function Register() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/register", {
            onSuccess: () => {
                router.visit("/login");
            },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="register">
            <h1>Register</h1>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className={errors.name ? "error" : ""}
                />
                {errors.name && <div>{errors.name}</div>}
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    className={errors.email ? "error" : ""}
                />
                {errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    className={errors.password ? "error" : ""}
                />
                {errors.password && <div>{errors.password}</div>}
            </div>
            <div>
                <label>Confirm Password</label>
                <input
                    type="password"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    className={errors.password_confirmation ? "error" : ""}
                />
                {errors.password_confirmation && (
                    <div>{errors.password_confirmation}</div>
                )}
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

Register.layout = (page) => <Layout>{page}</Layout>;
export default Register;


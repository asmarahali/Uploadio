import React from "react";
import { Link } from "@inertiajs/react";
import "../../css/Layout.css";

function Layout({ children }) {
    return (
        <>
            <header>
                <nav className="navbar">
                    <Link href="/login">Log In </Link>
                    <Link href="/register">Register</Link>
                </nav>
            </header>
            <main className="main-content">{children}</main>
        </>
    );
}

export default Layout;

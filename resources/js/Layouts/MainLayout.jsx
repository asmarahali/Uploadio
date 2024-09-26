import React, { useState } from "react"; // Import useState from React
import { Inertia } from '@inertiajs/inertia'; // Import Inertia for handling requests
import "../../css/MainLayout.css";
import "font-awesome/css/font-awesome.min.css";

function MainLayout({ children }) {
    const [isVisible, setIsVisible] = useState(false); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    };

    const handleLinkClick = () => {
        setIsVisible(false);
    };

    const handleLogout = (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        Inertia.post('/logout'); // Send a POST request to logout
    };

    return (
        <div>
            <button onClick={toggleSidebar} className="toggle-button">
                {isVisible ? (
                    <i className="fa-solid fa-backward"></i>
                ) : (
                    <i className="fa fa-bars"></i>
                )}
            </button>

            {isVisible && (
                <div className="sidebar">
                    <div className="close-icon" onClick={handleLinkClick}>
                        <i className="fa-solid fa-backward"></i>
                    </div>
                    <a href="/dashboard" onClick={handleLinkClick}>
                        Home
                    </a>
                    <a href="/upload" onClick={handleLinkClick}>
                        Upload Video
                    </a>
                    <a href="/settings" onClick={handleLinkClick}>
                        Settings
                    </a>
                    <a href="/logout" onClick={handleLogout}>
                        Log out
                    </a>
                </div>
            )}

            <main>{children}</main>
            <footer></footer>
        </div>
    );
}

export default MainLayout;

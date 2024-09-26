import React from "react";
import Layout from "../Layouts/Layout";
import "../../css/Home.css";
import "font-awesome/css/font-awesome.min.css";

function Home() {
    const handleGetStartedClick = () => {
        e.preventDefault();
        post("/register", {
            onSuccess: () => {
                router.visit("/register");
            },
        });
    };

    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <h1>Learn and Teach, Anytime, Anywhere</h1>
                <p>
                    Upload, share, and discover educational content in just a
                    few clicks.
                </p>
                <div className="uploadio">
                    Just try <span>Up</span>loadio
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <h2>Why Choose Our Platform?</h2>
                <div className="feature-cards">
                    <div className="feature-card">
                        <h3>Easy Video Upload</h3>
                        <p>
                            Upload your educational content in minutes and share
                            it with learners worldwide.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3>Diverse Topics</h3>
                        <p>
                            From programming to design, explore courses across
                            various fields.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3>Learn at Your Own Pace</h3>
                        <p>Access courses anytime, on any device.</p>
                    </div>
                </div>
            </section>

            {/* Popular Categories Section */}
            <section className="categories">
                <h2>Top Learning Categories</h2>
                <div className="category-cards">
                    <div className="category-card">Web Development</div>
                    <div className="category-card">Design</div>
                    <div className="category-card">Marketing</div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta">
                <h2>Ready to Share Your Knowledge?</h2>
                <p>Join our community of learners and teachers today!</p>
                <button
                    className="get-started-btn"
                    onClick={handleGetStartedClick}
                >
                    Get Started Now
                </button>
            </section>
        </div>
    );
}
Home.layout = (page) => <Layout children={page} />;
export default Home;

import React from "react";
import { Inertia } from "@inertiajs/inertia";
import MainLayout from "../Layouts/MainLayout";
import "../../css/VideoShow.css"; // Ensure you add your custom styles in a separate CSS file

function VideoShow({ video }) {
    const handleEditClick = () => {
        if (!video || !video.id) {
            console.error("Video ID is missing or undefined");
            return;
        }
        console.log(video.id);
        Inertia.get(`/video/${video.id}/edit`);
    };
    const handleDeleteClick = () => {
        if (confirm("Are you sure you want to delete this video?")) {
            Inertia.delete(`/video/${video.id}`);
        }
    };

    return (
        <div className="video-container">
            <h1 className="video-title">{video.title}</h1>
            <video className="video-player" controls>
                <source src={`/storage/${video.path}`} type={video.mime_type || "video/mp4"} />
                Your browser does not support the video tag.
            </video>
            <p className="video-description">{video.description}</p>

            {/* Buttons for Edit and Delete */}
            <div className="video-actions">
                <button className="btn edit-btn" onClick={handleEditClick}>Edit</button>
                <button 
                    className="btn delete-btn"
                    onClick={handleDeleteClick}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

VideoShow.layout = (page) => <MainLayout>{page}</MainLayout>;

export default VideoShow;

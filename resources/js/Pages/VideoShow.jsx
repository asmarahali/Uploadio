import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import MainLayout from "../Layouts/MainLayout";
import VideoEdit from "./VedioEdit";
import "../../css/VideoShow.css";

function VideoShow({ video }) {
    const [isEditMode, setIsEditMode] = useState(false);

    const handleEditClick = () => {
        setIsEditMode(true); // Show the edit form on click
    };

    const handleDeleteClick = () => {
        if (confirm("Are you sure you want to delete this video?")) {
            Inertia.delete(`/video/${video.id}`);
        }
    };

    const handleCloseEditMode = () => {
        setIsEditMode(false); // Hide the edit form
    };

    return (
        <div className="video-container">
            <h1 className="video-title">{video.title}</h1>
            <video className="video-player" controls>
                <source
                    src={`/storage/${video.path}`}
                    type={video.mime_type || "video/mp4"}
                />
                Your browser does not support the video tag.
            </video>
            <p className="video-description">{video.description}</p>

            <div className="video-actions">
                <button className="btn edit-btn" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="btn delete-btn" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>

            {/* Conditionally render the VideoEdit form when in edit mode */}
            {isEditMode && (
                <div className="edit-section">
                    <VideoEdit video={video} onClose={handleCloseEditMode} />
                </div>
            )}
        </div>
    );
}

VideoShow.layout = (page) => <MainLayout>{page}</MainLayout>;

export default VideoShow;

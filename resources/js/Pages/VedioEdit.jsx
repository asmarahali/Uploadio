import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import MainLayout from "../Layouts/MainLayout";
import "../../css/VedioEdit.css";  

function VideoEdit({ video, onClose }) {
    const [title, setTitle] = useState(video.title || "");
    const [description, setDescription] = useState(video.description || "");

    const handleUpdate = (e) => {
        e.preventDefault();

        // Check if the title is not empty before submitting
        if (title.trim() === "") {
            alert("Title cannot be empty!");
            return;
        }

        // Send the update request
        Inertia.put(`/video/${video.id}`, {
            title,
            description
        });

        onClose(); // Close the modal after updating
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Update Video</h2>
                <form onSubmit={handleUpdate}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="btn save-btn">Save</button>
                        <button type="button" className="btn cancel-btn" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

VideoEdit.layout = (page) => <MainLayout>{page}</MainLayout>;

export default VideoEdit;

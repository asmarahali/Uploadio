import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import MainLayout from "../Layouts/MainLayout";

function VideoEdit({ video }) {
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
    };

    return (
        <div>
            <h1>Edit Video</h1>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Update Video</button>
            </form>
        </div>
    );
}

VideoEdit.layout = (page) => <MainLayout>{page}</MainLayout>;

export default VideoEdit;
